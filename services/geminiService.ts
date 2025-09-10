
import { GoogleGenAI, Modality, FinishReason } from "@google/genai";
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

    const candidate = response.candidates?.[0];

    if (!candidate) {
      throw new Error("The model did not return a response. Please try again.");
    }
    
    // Find the image part in the response
    const generatedImagePart = candidate.content?.parts?.find(
      (part) => part.inlineData?.data
    );

    if (generatedImagePart?.inlineData) {
      const { data, mimeType } = generatedImagePart.inlineData;
      return `data:${mimeType};base64,${data}`;
    }

    // If no image, provide a more detailed error based on the response
    if (candidate.finishReason === FinishReason.SAFETY) {
        throw new Error("Your request was blocked by safety filters. This can happen when using photos of people. Please try a different photo or a more general style.");
    }
    
    if (candidate.finishReason === FinishReason.RECITATION) {
        throw new Error("Your request was blocked as it may violate content policies. Please try a different prompt.");
    }

    const textResponse = response.text?.trim();
    if (textResponse) {
      throw new Error(`The model returned a message instead of an image: "${textResponse}"`);
    }
    
    // Generic fallback including the finish reason for debugging
    throw new Error(`Image generation failed. (Reason: ${candidate.finishReason || 'Unknown'})`);

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to style image: ${error.message}`);
    }
    throw new Error("An unknown error occurred while styling the image.");
  }
};
