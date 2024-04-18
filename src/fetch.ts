export const postJson = (url: string, data: any, params: any = {}): Promise<Response> => {
	return fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
		...params
	});
};

export const get = (url: string, query?: any, params: any = {}): Promise<Response> => {
	if (query && Object.keys(query).length > 0) {
		url += "?" + new URLSearchParams(query).toString();
	}

	return fetch(url, {
		method: "GET",
		...params
	});
};
