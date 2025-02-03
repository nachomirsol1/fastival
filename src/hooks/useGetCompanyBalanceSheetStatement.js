import { useQuery } from '@tanstack/react-query';
import { getBalanceSheetStatement } from '../services/companyFinancialStatements';

export const useGetCompanyBalanceSheetStatement = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['balanceSheet', symbol],
		queryFn: () => getBalanceSheetStatement(symbol),
		enabled: Boolean(symbol),
	});
	return {
		balanceSheet: data,
		balanceSheetLoading: isLoading,
		balanceSheetError: error,
	};
};
