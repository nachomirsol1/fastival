import { Chart } from '../../components/chart/Chart';
import { useParams } from 'react-router-dom';
import { CompanyInfoCard } from '../../components/companyInfoCard/CompanyInfoCard';
import { useGetCompanyRatios } from '../../hooks/useGetCompanyRatios';
import { useGetCompanyProfile } from '../../hooks/useGetCompanyProfile';
import { formatChartData } from '../../common/utils/formatChartData';

export const Dashboard = () => {
	const { symbol } = useParams();
	const { isLoading, companyRatios, error } = useGetCompanyRatios(symbol);
	const { isLoading: companyProfileLoading, companyProfile } =
		useGetCompanyProfile(symbol);
	const chartData = [
		{ name: 'Jan', value: 400 },
		{ name: 'Feb', value: 300 },
		{ name: 'Mar', value: 200 },
		{ name: 'Apr', value: 278 },
		{ name: 'May', value: 189 },
	];
	console.log(companyProfile);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading data</div>;

	const perData = formatChartData(companyRatios, 'priceEarningsRatio');

	return (
		<div className='min-h-screen bg-[#F8FAFC]'>
			<div className='container mx-auto px-6 py-8'>
				{companyProfile && (
					<CompanyInfoCard
						logoUrl={companyProfile[0]?.image}
						companyName={companyProfile[0]?.companyName}
						category={companyProfile[0]?.sector}
					/>
				)}

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
					<Chart
						data={perData}
						type='line'
						title='PER RATIO'
						dataKey={'priceEarningsRatio'}
					/>
					<Chart
						data={perData}
						type='bar'
						title='Bar Chart 1'
						dataKey={'priceEarningsRatio'}
					/>

					<Chart data={chartData} type='line' title='Bar Chart 1' />
					<Chart data={perData} type='line' title='Bar Chart 1' />
				</div>
			</div>
		</div>
	);
};
