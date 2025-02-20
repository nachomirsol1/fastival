export const formatChartData = (data, key) => {
	return (
		data?.map((item) => ({
			name: item.date,
			[key]: item[key],
		})) || []
	);
};

export const formatNumber = (num) => {
	if (num >= 1e9) {
		return (num / 1e9).toFixed(2) + ' B';
	}
	if (num >= 1e6) {
		return (num / 1e9).toFixed(2) + ' M';
	}
	if (num >= 1e3) {
		return (num / 1e9).toFixed(2) + ' K';
	}
	return 0;
};
