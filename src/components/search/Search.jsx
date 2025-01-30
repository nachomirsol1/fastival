import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
	const [symbol, setSymbol] = useState('');
	const navigate = useNavigate();

	const handleSearch = () => {
		if (symbol) {
			navigate(`/company/${symbol}`);
		}
	};

	return (
		<div className='h-screen bg-indigo-400 flex items-center justify-center'>
			<div className='w-full max-w-md'>
				<h1 className='text-4xl text-white font-bold text-center mb-6'>
					Quick stock valuation
				</h1>
				<div className='relative'>
					<input
						type='text'
						placeholder='Enter Company Ticker'
						value={symbol}
						onChange={(e) => setSymbol(e.target.value)}
						className='w-full p-4 text-white placeholder-gray-300 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white'
					/>
					<button
						onClick={handleSearch}
						className='absolute top-0 right-0 mt-3 mr-3 bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200'
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};
