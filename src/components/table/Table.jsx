import { useMemo } from 'react';

export const Table = ({ data }) => {
	const sortedData = useMemo(() => {
		return [...data].sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	}, [data]);

	const years = sortedData.map((item) =>
		new Date(item.date).getFullYear().toString()
	);

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
		<div className='overflow-x-auto bg-white rounded-lg shadow p-4'>
			<table className='w-full text-sm text-left text-gray-500'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
					<tr>
						<th className='px-4 py-2 font-medium'>Metric</th>
						{years.map((year) => (
							<th key={year} className='px-4 py-2 font-medium'>
								{year}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{metrics.map(({ key, label }) => (
						<tr key={key} className='border-b hover:bg-gray-50 cursor-pointer'>
							<th className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
								{label}
							</th>
							{sortedData.map((item) => (
								<td key={item.date} className='px-4 py-2'>
									{formatNumber(Number(item[key]))}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
