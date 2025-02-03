
export const SubMenu = ({activeTab, setActiveTab}) => {
	
	const menuItems = [
		{ name: 'Income Statement', href: '#income-statement' },
		{ name: 'Balance Sheet', href: '#balance-sheet' },
		{ name: 'Cash Flow', href: '#cash-flow' },
		{ name: 'Charts', href: '#charts' },
	];

	return (
		<div className='border-b border-gray-200'>
			<nav className='-mb-px flex cursor-pointer space-x-8' aria-label='Tabs'>
				{menuItems.map((item) => {
					const isActive = activeTab === item.name;
					const Icon = item.icon;

					return (
						<span
							key={item.name}
							onClick={() => setActiveTab(item.name)}
							className={`group inline-flex items-center border-b-2
	px-1 py-4 text-sm ${
		isActive
			? 'border-indigo-400 text-indigo-600 font-medium'
			: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
	}`}
						>
							<span>{item.name}</span>
						</span>
					);
				})}
			</nav>
		</div>
	);
};
