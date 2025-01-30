import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCompanyProfile } from '../../hooks/useGetCompanyProfile';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Legend,
} from 'recharts';

export const CompanyDetails = () => {
	const { symbol } = useParams();
	const { isLoading, companyProfile, error } = useGetCompanyProfile(symbol);
	console.log(companyProfile);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading data</div>;

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-bold mb-4'>{companyProfile.companyName}</h1>
			<p>Sector: {companyProfile.sector}</p>
			<p>Market Cap: {companyProfile.marketCap}</p>

			<div className='mt-6'>
				<h2 className='text-xl font-semibold mb-4'>Price vs EPS</h2>
				{/*<LineChart
					width={600}
					height={300}
					data={companyProfile.priceEpsHistory}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type='monotone' dataKey='price' stroke='#8884d8' />
					<Line type='monotone' dataKey='eps' stroke='#82ca9d' />
				</LineChart>*/}
				<LineChart
					width={600}
					height={300}
					data={companyProfile.priceEpsHistory}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type='monotone' dataKey='price' stroke='#8884d8' />
					<Line type='monotone' dataKey='eps' stroke='#82ca9d' />
				</LineChart>
			</div>
		</div>
	);
};
