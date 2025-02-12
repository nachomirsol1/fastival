import { useState, useMemo } from 'react';
import { Chart } from '../../../../components/chart/Chart';
import { Table } from '../../../../components/table/Table';
import { NoMetricCard } from '../../../../components/noMetricCard/NoMetricCard';

export const FinancialStatements = ({ data }) => {
	const [selectedMetric, setSelectedMetric] = useState('');
	const handleRowClick = (metric) => {
		setSelectedMetric(metric);
	};
	const chartData = useMemo(() => {
		return data
			.map((entry) => ({
				name: new Date(entry.date).getFullYear().toString(),
				value: entry[selectedMetric],
			}))
			.reverse();
	}, [data, selectedMetric]);
	return (
		<div className='w-full mx-auto space-y-8'>
			<div className='grid grid-cols-1 gap-6'>
				{selectedMetric ? (
					<Chart
						data={chartData || []}
						type='bar'
						title={selectedMetric}
						dataKey={'value'}
					/>
				) : (
					<NoMetricCard
						text={'No Metric Selected'}
						subText={'Select a metric to view charts'}
					/>
				)}
			</div>
			<Table data={data} onRowClick={handleRowClick} />
		</div>
	);
};
