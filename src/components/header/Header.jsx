import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className='w-full bg-gray-50 border-b border-gray-200'>
			<div className='container mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<NavLink to='/' end>
							<img
								src='/logo.svg'
								alt='Company Logo'
								width={120}
								height={40}
								className='mr-4'
							/>
						</NavLink>
					</div>
					<nav>{/* Add navigation items here if needed */}</nav>
				</div>
			</div>
		</header>
	);
};
