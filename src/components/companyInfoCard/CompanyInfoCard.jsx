export const CompanyInfoCard = ({ logoUrl, companyName, category }) => {
	return (
		<div
			className='rounded-lg bg-white text-gray-900 shadow-sm border
	border-gray-200 flex w-full flex-row items-center gap-4 px-4 py-4'
		>
			<div
				className='flex-shrink-0 w-12 h-12 rounded-md
	overflow-hidden bg-gray-100'
			>
				<img
					src={logoUrl || '/placeholder.svg'}
					alt={`${companyName} logo`}
					width={48}
					height={48}
					className='object-cover'
				/>
			</div>
			<div className='flex flex-col min-w-0'>
				<h1 className='text-lg font-semibold truncate'>{companyName}</h1>
				<p className='text-sm text-gray-500 truncate'>{category}</p>
			</div>
		</div>
	);
};
