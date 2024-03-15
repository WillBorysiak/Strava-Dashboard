type Fetcher<T> = (...args: [RequestInfo, RequestInit?]) => Promise<T>;

export const fetcher: Fetcher<any> = async (...args: [RequestInfo, RequestInit?]) => {
	const response = await fetch(...args);
	if (!response.ok) throw new Error('Failed to fetch data');

	return response.json();
};
