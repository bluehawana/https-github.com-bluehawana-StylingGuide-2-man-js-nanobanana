import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { GoogleGenAI, Modality } from '@google/genai';

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' }));

const REQUIRED_MODEL = 'gemini-2.5-flash-image-preview';

const ensureKey = () => {
  const key = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!key) {
    throw new Error('GEMINI_API_KEY is not set on the server');
  }
  return key;
};

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/style-image', async (req, res) => {
  try {
    const { imagePart, prompt } = req.body || {};
    if (!prompt || !imagePart || !imagePart.inlineData || !imagePart.inlineData.data) {
      return res.status(400).json({ error: 'Missing imagePart.inlineData.data or prompt' });
    }

    const ai = new GoogleGenAI({ apiKey: ensureKey() });

    const response = await ai.models.generateContent({
      model: REQUIRED_MODEL,
      contents: {
        parts: [imagePart, { text: String(prompt) }],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
        temperature: 0.7,
        maxOutputTokens: 2048
      },
    });

    console.log('Server API Response structure:', {
      candidates: response.candidates?.length,
      parts: response.candidates?.[0]?.content?.parts?.length,
      partTypes: response.candidates?.[0]?.content?.parts?.map(p => ({ 
        hasInlineData: !!p.inlineData, 
        hasText: !!p.text,
        mimeType: p.inlineData?.mimeType 
      }))
    });

    const imageParts = response.candidates?.[0]?.content?.parts?.filter((p) => p.inlineData?.data);
    if (imageParts && imageParts.length > 0 && imageParts[0].inlineData) {
      const { data, mimeType } = imageParts[0].inlineData;
      return res.json({ dataUrl: `data:${mimeType};base64,${data}` });
    }

    const textResponse = response.text?.trim();
    if (textResponse) {
      return res.status(422).json({ error: `Model returned text: ${textResponse}` });
    }

    return res.status(500).json({ error: 'No image data found in response' });
  } catch (err) {
    console.error('Server /api/style-image error', err);
    res.status(500).json({ error: err instanceof Error ? err.message : 'Unknown server error' });
  }
});

const port = process.env.PORT || 8787;
app.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`);
});
