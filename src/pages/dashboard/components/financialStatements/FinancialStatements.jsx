import { Chart } from '../../../../components/chart/Chart';
import { Table } from '../../../../components/table/Table';

export const FinancialStatements = ({ data }) => {
	return (
		<div className='w-full max-w-7xl mx-auto space-y-8'>
			<div className='grid grid-cols-1 gap-6'>
				<Chart
					data={data}
					type='line'
					title='PER RATIO'
					dataKey={'priceEarningsRatio'}
				/>
			</div>
			<Table data={data} />
		</div>
	);
};
