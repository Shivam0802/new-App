export type SavePayload = {
  message: string;
  createdAt: string;
};

const BASE_URL = 'https://your-backend-url.com'; 

export async function saveDataToBackend(payload: SavePayload): Promise<void> {
  const response = await fetch(`${BASE_URL}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to save data. Status: ${response.status}`);
  }
}


