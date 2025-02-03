import {
	Home,
	BarChart2,
	DollarSign,
	Users,
	Settings,
	HelpCircle,
} from 'lucide-react';

export const Sidebar = () => {
	return (
		<aside
			className='bg-white w-64 h-screen fixed top-0 left-0
overflow-y-auto'
		>
			<div className='py-4 px-6'>
				<h2 className='text-lg font-semibold text-gray-800 mb-4'>Dashboard</h2>
				<nav>
					<ul className='space-y-2'>
						<li>
							<a
								href='#'
								className='flex items-center text-gray-600
hover:text-indigo-600'
							>
								<Home className='mr-3 h-5 w-5' />
								Home
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center text-gray-600
hover:text-indigo-600'
							>
								<BarChart2 className='mr-3 h-5 w-5' />
								Analytics
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center text-gray-600
hover:text-indigo-600'
							>
								<DollarSign className='mr-3 h-5 w-5' />
								Finances
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className='py-4 px-6 border-t border-gray-100'>
				<h3 className='text-sm font-medium text-gray-400 mb-2'>Team</h3>
				<nav>
					<ul className='space-y-2'>
						<li>
							<a
								href='#'
								className='flex items-center text-gray-600
hover:text-indigo-600'
							>
								<Users className='mr-3 h-5 w-5' />
								Members
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className='py-4 px-6 border-t border-gray-100'>
				<h3 className='text-sm font-medium text-gray-400 mb-2'>Support</h3>
				<nav>
					<ul className='space-y-2'>
						<li>
							<a
								href='#'
								className='flex items-center text-gray-600
hover:text-indigo-600'
							>
								<Settings className='mr-3 h-5 w-5' />
								Settings
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center text-gray-600
hover:text-indigo-600'
							>
								<HelpCircle className='mr-3 h-5 w-5' />
								Help
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};
