import { useQuery } from '@tanstack/react-query';
import { getIncomeStatement } from '../services/companyFinancialStatements';
import { filterFinancialData } from '../common/utils/filterFinancialData';
import { INCOME_PROPERTIES } from '../common/constants/financialStatement';

export const useGetCompanyIncomeStatement = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['income', symbol],
		queryFn: () => getIncomeStatement(symbol),
		enabled: Boolean(symbol),
		select: (response) => filterFinancialData(response, INCOME_PROPERTIES),
	});
	return {
		incomeStatement: data,
		incomeLoading: isLoading,
		incomeError: error,
	};
};
