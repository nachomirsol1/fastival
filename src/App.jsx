import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Search } from './components/search/Search';
import { Dashboard } from './pages/dashboard/DashBoard';
import { queryClient } from './common/config/queryClient';

export const App = () => (
	<QueryClientProvider client={queryClient}>
		<Router>
			<Routes>
				<Route path='/' element={<Search />} />
				<Route path='/company/:symbol' element={<Dashboard />} />
			</Routes>
		</Router>
	</QueryClientProvider>
);
