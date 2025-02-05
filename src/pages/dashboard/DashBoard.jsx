import React, { useState } from 'react';
import { Chart } from '../../components/chart/Chart';
import { useParams } from 'react-router-dom';
import { CompanyInfoCard } from '../../components/companyInfoCard/CompanyInfoCard';
import { useGetCompanyRatios } from '../../hooks/useGetCompanyRatios';
import { useGetCompanyProfile } from '../../hooks/useGetCompanyProfile';
import { formatChartData } from '../../common/utils/formatChartData';
import { Header } from '../../components/header/Header';
import { SubMenu } from '../../components/subMenu/SubMenu';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { FinancialStatements } from './components/financialStatements/FinancialStatements';
import { useGetCompanyIncomeStatement } from '../../hooks/useGetCompanyIncomeStatement';
import { useGetCompanyBalanceSheetStatement } from '../../hooks/useGetCompanyBalanceSheetStatement';
import { useGetCompanyCashflowStatement } from '../../hooks/useGetCompanyCashflowStatement';
export const Dashboard = () => {
	const { symbol } = useParams();
	const [activeTab, setActiveTab] = useState('Income Statement');
	const { isLoading, companyRatios, error } = useGetCompanyRatios(symbol);
	const { isLoading: companyProfileLoading, companyProfile } =
		useGetCompanyProfile(symbol);
	const { incomeStatement, incomeLoading, incomeError } =
		useGetCompanyIncomeStatement(symbol);
	const { balanceSheet, balanceSheetLoading, balanceSheetError } =
		useGetCompanyBalanceSheetStatement(symbol);
	const { cashflow, cashflowLoading, cashflowError } =
		useGetCompanyCashflowStatement(symbol);
	const chartData = [
		{ name: 'Jan', value: 400 },
		{ name: 'Feb', value: 300 },
		{ name: 'Mar', value: 200 },
		{ name: 'Apr', value: 278 },
		{ name: 'May', value: 189 },
	];
	console.log(incomeStatement);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading data</div>;

	const perData = formatChartData(companyRatios, 'priceEarningsRatio');

	return (
		<div className='min-h-screen bg-[#F8FAFC]'>
			<Sidebar />
			<div className='ml-64'>
				<Header />
				<main>
					<div className='container mx-auto px-6 py-8'>
						{companyProfile && (
							<>
								<CompanyInfoCard
									logoUrl={companyProfile[0]?.image}
									companyName={companyProfile[0]?.companyName}
									category={companyProfile[0]?.sector}
								/>
								<div className='mt-6'>
									<SubMenu activeTab={activeTab} setActiveTab={setActiveTab} />
								</div>
							</>
						)}

						<div className='grid grid-cols-1 md:grid-cols-1 gap-6 mt-8'>
							{activeTab === 'Income Statement' && !incomeLoading && (
								<FinancialStatements data={incomeStatement || []} />
							)}
						</div>
						<div>
							{activeTab === 'Balance Sheet' && !balanceSheetLoading && (
								<FinancialStatements data={balanceSheet} />
							)}
						</div>
						<div>
							{activeTab === 'Cash Flow' && !cashflowLoading && (
								<FinancialStatements data={cashflow} />
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};
