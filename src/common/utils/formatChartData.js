export const formatChartData = (data, key) => {
	return (
		data?.map((item) => ({
			name: item.date,
			[key]: item[key],
		})) || []
	);
};
