import {
	BarChart,
	Bar,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

export const Chart = ({ data, type, title, dataKey }) => {
	const ChartComponent = type === 'bar' ? BarChart : LineChart;
	const DataComponent = type === 'bar' ? Bar : Line;

	return (
		<div className='w-full p-6 bg-white rounded-lg shadow-md'>
			<h2 className='text-[15px] font-semibold mb-6 text-gray-900'>{title}</h2>
			<ResponsiveContainer width='100%' height={300}>
				<ChartComponent data={data}>
					<CartesianGrid strokeDasharray='3 3' stroke='#f0f0f00' />
					<XAxis
						dataKey='name'
						tick={{ fontSize: 12 }}
						tickLine={false}
						axisLine={{ stroke: '#E5E7EB' }}
					/>
					<YAxis
						tick={{ fontSize: 12 }}
						width={60}
						tickLine={false}
						axisLine={{ stroke: '#E5E7EB' }}
					/>
					<Tooltip />
					<Legend />
					<DataComponent
						type='monotone'
						dataKey={dataKey || 'value'}
						fill='#8884d8'
						stroke='#8884d8'
						strokeWidth={3}
					/>
				</ChartComponent>
			</ResponsiveContainer>
		</div>
	);
};
