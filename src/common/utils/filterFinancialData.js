export const filterFinancialData = (data, selectedKeys) => {
	return data?.map((entry) => {
		return selectedKeys.reduce(
			(filtered, key) => {
				if (entry[key] !== undefined) {
					filtered[key] = entry[key];
				}
				return filtered;
			},
			{ date: entry.date }
		);
	});
};
