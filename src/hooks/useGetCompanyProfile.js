import { useQuery } from '@tanstack/react-query';
import { getCompanyProfile } from '../services/companyInfo';

export const useGetCompanyProfile = (symbol) => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['company', symbol],
		queryFn: () => getCompanyProfile(symbol),
		enabled: Boolean(symbol),
	});
	return { companyProfile: data, isLoading, error };
};
