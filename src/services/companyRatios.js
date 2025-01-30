import { apiClient } from '../api';

export const getCompanyRatios = async (symbol) => {
	const response = await apiClient.get(`/ratios/${symbol}`);
	return response;
};
