import axios from 'axios';

//eslint-disable-next-line no-undef
const API_KEY = 'nonemwFpvCSuigZoERO2ZzXeIYnYQp9O';

const API_V3 = 'api/v3';
const BASE_URL = `https://financialmodelingprep.com/${API_V3}`;

export const apiClient = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
	config.params = {
		...config.params,
		apikey: API_KEY,
	};
	return config;
});

apiClient.interceptors.response.use(
	(response) => response.data,
	(error) => {
		const errorMessage = error.response?.data?.message || 'error fetching data';
		console.error('API ERROR:', error);
		throw new Error(errorMessage);
	}
);
