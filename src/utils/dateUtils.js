export function formatDate(dateString) {
	if (dateString.length === 4) {
		return dateString;
	}

	const dateParts = dateString.split('-');
	const year = dateParts[0] || '';

	return year;
}