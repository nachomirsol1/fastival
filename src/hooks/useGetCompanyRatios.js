import { useQuery } from '@tanstack/react-query';
import { getCompanyRatios } from '../services/companyRatios';

export const useGetCompanyRatios = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['companyRatios', symbol],
		queryFn: () => getCompanyRatios(symbol),
		enabled: Boolean(symbol),
	});
	return { companyRatios: data, isLoading, error };
};
