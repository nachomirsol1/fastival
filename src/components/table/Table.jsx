import { useMemo } from 'react';
import { formatNumber } from '../../common/utils/formatChartData';

export const Table = ({ data, onRowClick }) => {
	const sortedData = useMemo(() => {
		return [...data].sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	}, [data]);

	const years = sortedData
		.map((item) => new Date(item.date).getFullYear().toString())
		.reverse();

	const metrics = useMemo(() => {
		const allKeys = Object.keys(data[0] || {}).filter(
			(key) => key !== 'date' && key !== 'symbol'
		);
		return allKeys.map((key) => ({
			key,
			label: key.replace(/([A-Z])/g, ' $1').trim(),
		}));
	}, [data]);

	return (
		<div className='overflow-x-auto bg-white rounded-lg shadow-md'>
			<table className='w-full text-sm text-left'>
				<thead className='text-xs uppercase bg-gray-50 border-r border-indigo-200'>
					<tr>
						<th className='px-6 py-3 font-medium text-gray-700'>Metric</th>
						{years.map((year) => (
							<th key={year} className='px-6 py-3 font-medium text-gray-400'>
								{year}
							</th>
						))}
					</tr>
				</thead>
				<tbody className='divide-y divide-dashed divide-gray-200'>
					{metrics.map(({ key, label }) => (
						<tr
							key={key}
							className='border-b hover:bg-gray-50 cursor-pointer'
							onClick={() => onRowClick(key)}
						>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-gray-600 whitespace-nowrap border-r border-indigo-100'
							>
								{label}
							</th>
							{sortedData
								.map((item) => (
									<td key={item.date} className='px-6 py-4 text-gray-500'>
										{formatNumber(Number(item[key]))}
									</td>
								))
								.reverse()}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
