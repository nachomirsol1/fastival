import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyInfoCard } from '../../components/companyInfoCard/CompanyInfoCard';
import { useGetCompanyRatios } from '../../hooks/useGetCompanyRatios';
import { useGetCompanyProfile } from '../../hooks/useGetCompanyProfile';
import { Header } from '../../components/header/Header';
import { SubMenu } from '../../components/subMenu/SubMenu';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { FinancialStatements } from './components/financialStatements/FinancialStatements';
import { useGetCompanyIncomeStatement } from '../../hooks/useGetCompanyIncomeStatement';
import { useGetCompanyBalanceSheetStatement } from '../../hooks/useGetCompanyBalanceSheetStatement';
import { useGetCompanyCashflowStatement } from '../../hooks/useGetCompanyCashflowStatement';
import { Spinner } from '../../components/spinner/Spinner';

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

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading data</div>;

	const renderTableData = (loading, error, data) => {
		if (loading) return <Spinner />;
		if (error) return <p>Error loading data</p>;

		return <FinancialStatements data={data} />;
	};
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
							{activeTab === 'Income Statement' &&
								renderTableData(incomeLoading, incomeError, incomeStatement)}
						</div>
						<div>
							{activeTab === 'Balance Sheet' &&
								renderTableData(
									balanceSheetLoading,
									balanceSheetError,
									balanceSheet
								)}
						</div>
						<div>
							{activeTab === 'Cash Flow' &&
								renderTableData(cashflowLoading, cashflowError, cashflow)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};
