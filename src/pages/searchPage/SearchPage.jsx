import React from 'react';
import { Search } from '../../components/search/Search';

export const SearchPage = () => {
	return (
		<div className='h-screen bg-indigo-400 flex items-center justify-center'>
			<div className='w-full max-w-md'>
				<h1 className='text-4xl text-white font-bold text-center mb-6'>
					Quick stock valuation
				</h1>
				<div className='relative'>
					<Search />
				</div>
			</div>
		</div>
	);
};
