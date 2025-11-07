// src/app/api/translate/route.js
export async function POST(req) {
  try {
    const { text, target } = await req.json();

    if (!text || !target) {
      return new Response(
        JSON.stringify({ error: "Missing text or target language" }),
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

    // Split the text by your separator
    const textParts = text.split("||").map((t) => t.trim()).filter(Boolean);

    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: textParts, // ✅ send as array (Google translates each separately)
          target,
          format: "text",
          model: "nmt",
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error("Google Translate API error:", data.error);
      return new Response(JSON.stringify({ error: data.error.message }), {
        status: 500,
      });
    }

    const translations = data?.data?.translations?.map(
      (t) => t.translatedText
    ) || [];

    return new Response(
      JSON.stringify({ translatedText: translations.join("||") }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Server error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
