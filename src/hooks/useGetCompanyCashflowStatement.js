import { useQuery } from '@tanstack/react-query';
import { getCashflowStatement } from '../services/companyFinancialStatements';
import { filterFinancialData } from '../common/utils/filterFinancialData';
import { CASHFLOW_PROPERTIES } from '../common/constants/financialStatement';

export const useGetCompanyCashflowStatement = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['cashflow', symbol],
		queryFn: () => getCashflowStatement(symbol),
		enabled: Boolean(symbol),
		select: (response) => filterFinancialData(response, CASHFLOW_PROPERTIES),
	});
	return { cashflow: data, cashflowLoading: isLoading, cashflowError: error };
};
