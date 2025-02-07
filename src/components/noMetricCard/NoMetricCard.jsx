import { BarChart2 } from 'lucide-react';

export const NoMetricCard = ({ text, subText }) => {
	return (
		<div className='bg-white rounded-lg shadow-md p-8 text-center'>
			<div className='flex justify-center mb-4'>
				<BarChart2 className='h-16 w-16 text-indigo-400' />
			</div>
			<h2 className='text-2xl font-semibold text-indigo-500 mb-2'>{text}</h2>
			<p className='text-gray-400'>{subText}</p>
		</div>
	);
};
