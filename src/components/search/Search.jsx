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
		<div className='relative'>
			<input
				type='text'
				placeholder='Enter Company Ticker'
				value={symbol}
				onChange={(e) => setSymbol(e.target.value)}
				className='w-full p-4 text-white placeholder-gray-50 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white'
			/>
			<button
				onClick={handleSearch}
				className='absolute top-0 right-0 mt-3 mr-3 bg-white text-indigo-400 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200'
			>
				Search
			</button>
		</div>
	);
};
