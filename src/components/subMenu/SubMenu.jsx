export const SubMenu = () => {
	const menuItems = [
		{ name: 'Income Statement', href: '#income-statement' },
		{ name: 'Balance Sheet', href: '#balance-sheet' },
		{ name: 'Cash Flow', href: '#cash-flow' },
		{ name: 'Charts', href: '#charts' },
	];

	return (
		<nav className='border-b border-gray-200'>
			<ul className='flex justify-center space-x-8'>
				{menuItems.map((item) => (
					<li key={item.name}>
						<span
							className='text-sm font-light
text-gray-500 hover:text-gray-900 py-4 inline-block'
						>
							{item.name}
						</span>
					</li>
				))}
			</ul>
		</nav>
	);
};
