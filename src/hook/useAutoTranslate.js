"use client";

export default function useAutoTranslate(targetLang) {
  if (!targetLang || targetLang === "en") return;

  const translatePage = async () => {
    const getAllTextNodes = (root = document.body) => {
      const nodes = [];
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          if (
            node.parentElement &&
            ["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "OBJECT"].includes(
              node.parentElement.tagName
            )
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      });
      let node;
      while ((node = walker.nextNode())) {
        if (node.textContent.trim().length > 0) nodes.push(node);
      }
      return nodes;
    };

    const allNodes = getAllTextNodes();
    const allText = allNodes.map((n) => n.textContent).join("||");

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: allText, target: targetLang }),
      });

      const data = await res.json();

      if (data.translatedText) {
        const translatedParts = data.translatedText.split("||");
        allNodes.forEach((n, i) => {
          if (translatedParts[i]) n.textContent = translatedParts[i];
        });
      }
    } catch (error) {
      console.error("Translation failed:", error);
    }
  };


  if (document.readyState === "complete") translatePage();
  else window.addEventListener("load", translatePage);
}
