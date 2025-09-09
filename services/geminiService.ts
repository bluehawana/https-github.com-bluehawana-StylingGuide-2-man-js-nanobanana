
import { GoogleGenAI, Modality } from "@google/genai";
import type { Part } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const styleImage = async (imagePart: Part, prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [
          imagePart,
          { text: prompt },
        ],
      },
      config: {
        // NanoBanana MUST include both Modality.IMAGE and Modality.TEXT
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    // Find the image part in the response
    const imageParts = response.candidates?.[0]?.content?.parts.filter(
      (part) => part.inlineData?.data
    );

    if (imageParts && imageParts.length > 0 && imageParts[0].inlineData) {
      const { data, mimeType } = imageParts[0].inlineData;
      return `data:${mimeType};base64,${data}`;
    }

    // Check for a text-only response which might contain an error or refusal
    const textResponse = response.text?.trim();
    if (textResponse) {
      throw new Error(`The model returned a text response instead of an image: "${textResponse}"`);
    }

    throw new Error("No image data found in the API response.");

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to style image: ${error.message}`);
    }
    throw new Error("An unknown error occurred while styling the image.");
  }
};
