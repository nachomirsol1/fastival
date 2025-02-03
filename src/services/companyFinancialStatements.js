import { apiClient } from '../api';

export const getIncomeStatement = async (symbol) => {
	const response = await apiClient.get(`/income-statement/${symbol}`);
	return response;
};

export const getBalanceSheetStatement = async (symbol) => {
	const response = await apiClient.get(`/balance-sheet-statement/${symbol}`);
	return response;
};

export const getCashflowStatement = async (symbol) => {
	const response = await apiClient.get(`/cash-flow-statement/${symbol}`);
	return response;
};
