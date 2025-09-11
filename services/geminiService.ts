export interface InlineDataPart {
  inlineData: { data: string; mimeType: string };
}

export const styleImage = async (imagePart: InlineDataPart, prompt: string): Promise<string> => {
  try {
    const res = await fetch('/api/style-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imagePart, prompt })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || 'Server error');
    }

    const dataUrl = data?.dataUrl as string | undefined;
    if (!dataUrl) {
      throw new Error('No image data returned from server');
    }
    return dataUrl;
  } catch (error) {
    console.error('Error calling style image API:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to style image: ${error.message}`);
    }
    throw new Error('An unknown error occurred while styling the image.');
  }
};

