import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchPage } from './pages/searchPage/SearchPage';
import { Dashboard } from './pages/dashboard/DashBoard';
import { queryClient } from './common/config/queryClient';
import './index.css';

export const App = () => (
	<QueryClientProvider client={queryClient}>
		<Router>
			<Routes>
				<Route path='/' element={<SearchPage />} />
				<Route path='/company/:symbol' element={<Dashboard />} />
			</Routes>
		</Router>
	</QueryClientProvider>
);
