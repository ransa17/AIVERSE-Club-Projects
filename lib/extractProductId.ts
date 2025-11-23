// lib/extractProductId.ts

export function extractProductIdFromUrl(raw: string): string | null {
  if (!raw) return null;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    // not a valid URL
    return null;
  }

  const path = url.pathname;

  // handle /dp/ASIN or /gp/product/ASIN patterns
  const dpMatch = path.match(/\/dp\/([A-Z0-9]{8,12})/i);
  if (dpMatch?.[1]) return dpMatch[1];

  const gpMatch = path.match(/\/gp\/product\/([A-Z0-9]{8,12})/i);
  if (gpMatch?.[1]) return gpMatch[1];

  return null;
}
