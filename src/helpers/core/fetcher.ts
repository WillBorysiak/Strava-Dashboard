export const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Fetch error: ${response.status} ${response.statusText}`);

  return response.json();
};
