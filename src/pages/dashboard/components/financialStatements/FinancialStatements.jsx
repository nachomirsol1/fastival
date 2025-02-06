import { useState, useMemo } from 'react';
import { Chart } from '../../../../components/chart/Chart';
import { Table } from '../../../../components/table/Table';
import { formatNumber } from '../../../../common/utils/formatChartData';

export const FinancialStatements = ({ data }) => {
	const [selectedMetric, setSelectedMetric] = useState('');
	const handleRowClick = (metric) => {
		setSelectedMetric(metric);
	};
	const chartData = useMemo(() => {
		return data.map((entry) => ({
			name: new Date(entry.date).getFullYear().toString(),
			value: entry[selectedMetric],
		}));
	}, [data, selectedMetric]);
	return (
		<div className='w-full mx-auto space-y-8'>
			<div className='grid grid-cols-1 gap-6'>
				{selectedMetric && (
					<Chart
						data={chartData || []}
						type='bar'
						title={selectedMetric}
						dataKey={'value'}
					/>
				)}
			</div>
			<Table data={data} onRowClick={handleRowClick} />
		</div>
	);
};
