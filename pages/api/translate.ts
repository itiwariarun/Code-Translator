import { OpenAIStream } from "@/utils";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
    // Ensure the request is a POST request
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Parse request body correctly
    const { inputLanguage, outputLanguage, inputCode } = await req.json();

    // Call OpenAIStream function
    const stream = await OpenAIStream(inputLanguage, outputLanguage, inputCode);

    // Return the response correctly
    return new Response(stream);
  } catch (error) {
    console.error("Error in translation API:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
