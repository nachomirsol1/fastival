import { useQuery } from '@tanstack/react-query';
import { getIncomeStatement } from '../services/companyFinancialStatements';

export const useGetCompanyIncomeStatement = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['income', symbol],
		queryFn: () => getIncomeStatement(symbol),
		enabled: Boolean(symbol),
	});
	return {
		incomeStatement: data,
		incomeLoading: isLoading,
		incomeError: error,
	};
};
