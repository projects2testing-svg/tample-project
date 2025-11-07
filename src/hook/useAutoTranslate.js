"use client";

export default function useAutoTranslate(targetLang) {
  const ORIGINAL_DATA_ATTR = "data-orig-text";

  const translateNodes = async (nodes) => {
    if (!nodes.length || !targetLang || targetLang === "en") return;

    const texts = nodes.map((n) => n.textContent);

    const chunkArray = (arr, size) => {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    };

    const chunks = chunkArray(texts, 100);
    let translatedResults = [];

    for (const chunk of chunks) {
      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: chunk.join("||"), target: targetLang }),
        });

        const data = await res.json();
        if (data.translatedText) {
          translatedResults = translatedResults.concat(
            data.translatedText.split("||")
          );
        }
      } catch (error) {
        console.error("Translation batch failed:", error);
      }
    }

    nodes.forEach((n, i) => {
      if (!n.parentElement.hasAttribute(ORIGINAL_DATA_ATTR)) {
        n.parentElement.setAttribute(ORIGINAL_DATA_ATTR, n.textContent);
      }
      if (translatedResults[i]) n.textContent = translatedResults[i];
    });
  };

  const restoreOriginal = (nodes) => {
    nodes.forEach((n) => {
      const orig = n.parentElement?.getAttribute(ORIGINAL_DATA_ATTR);
      if (orig) n.textContent = orig;
    });
  };

  const getAllTextNodes = (root = document.body) => {
    const nodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        if (
          node.parentElement &&
          ["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "OBJECT"].includes(
            node.parentElement.tagName
          )
        ) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent.trim().length > 0) nodes.push(node);
    }
    return nodes;
  };

  const translatePage = () => {
    const allNodes = getAllTextNodes();
    if (targetLang && targetLang !== "en") translateNodes(allNodes);
    else restoreOriginal(allNodes);
  };

  const setupObserver = () => {
    const observer = new MutationObserver((mutations) => {
      const newTextNodes = [];
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            newTextNodes.push(...getAllTextNodes(node));
          }
        });
      }
      if (newTextNodes.length > 0) {
        if (targetLang && targetLang !== "en") translateNodes(newTextNodes);
        else restoreOriginal(newTextNodes);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  if (document.readyState === "complete") {
    translatePage();
    setupObserver();
  } else {
    window.addEventListener("load", () => {
      translatePage();
      setupObserver();
    });
  }
}
