import { useQuery } from '@tanstack/react-query';
import { getBalanceSheetStatement } from '../services/companyFinancialStatements';
import { filterFinancialData } from '../common/utils/filterFinancialData';
import { BALANCE_SHEET_PROPERTIES } from '../common/constants/financialStatement';

export const useGetCompanyBalanceSheetStatement = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['balanceSheet', symbol],
		queryFn: () => getBalanceSheetStatement(symbol),
		enabled: Boolean(symbol),
		select: (response) =>
			filterFinancialData(response, BALANCE_SHEET_PROPERTIES),
	});
	return {
		balanceSheet: data,
		balanceSheetLoading: isLoading,
		balanceSheetError: error,
	};
};
