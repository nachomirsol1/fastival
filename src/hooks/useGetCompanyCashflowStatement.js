import { useQuery } from '@tanstack/react-query';
import { getCashflowStatement } from '../services/companyFinancialStatements';

export const useGetCompanyIncomeStatement = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['company', symbol],
		queryFn: () => getCashflowStatement(symbol),
		enabled: Boolean(symbol),
	});
	return { cashflowStatement: data, casflowLoading: isLoading, error };
};
