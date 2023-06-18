export const removeHTMLTags = (str) => {
	if (str) {
		return str.replace(/<[^>]*>/g, '');
	}
	return '';
};