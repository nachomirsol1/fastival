import { useQuery } from '@tanstack/react-query';
import { getBalanceSheetStatement } from '../services/companyFinancialStatements';

export const useGetCompanyIncomeStatement = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['company', symbol],
		queryFn: () => getBalanceSheetStatement(symbol),
		enabled: Boolean(symbol),
	});
	return { balanceSheet: data, balanceSheetLoading: isLoading, error };
};
