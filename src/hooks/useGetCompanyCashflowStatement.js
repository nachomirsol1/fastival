import { useQuery } from '@tanstack/react-query';
import { getCashflowStatement } from '../services/companyFinancialStatements';

export const useGetCompanyCashflowStatement = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['cashflow', symbol],
		queryFn: () => getCashflowStatement(symbol),
		enabled: Boolean(symbol),
	});
	return { cashflow: data, cashflowLoading: isLoading, cashflowError: error };
};
