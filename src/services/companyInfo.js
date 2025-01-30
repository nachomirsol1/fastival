import { apiClient } from '../api';

export const getCompanyProfile = async (symbol) => {
	const response = await apiClient.get(`/profile/${symbol}`);
	return response;
};
