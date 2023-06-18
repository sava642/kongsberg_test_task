import Book from '../types';
import Item from '../types';
import { formatDate } from '../utils/dateUtils';
import { removeHTMLTags } from '../utils/textUtils';

export const fetchBooks = async (searchQuery: string): Promise<Book[]> => {
	try {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=20`
		);
		const data = await response.json();
		localStorage.setItem('searchQuery', searchQuery);
		if (data.items) {
			const bookList = data.items.map((item: Item) => {
				const volumeInfo = item.volumeInfo;
				const ID = item.id;
				const title = volumeInfo?.title || 'Unknown Title';
				const authors = volumeInfo?.authors || ['Unknown Author'];
				const publisher = volumeInfo?.publisher || 'Unknown Publisher';
				const originalDate = volumeInfo?.publishedDate || 'Unknown Date';
				const publishedDate = formatDate(originalDate);
				const thumbnail = volumeInfo?.imageLinks?.thumbnail || process.env.PUBLIC_URL + '/placeholder.png';

				return {
					ID,
					title,
					authors,
					publisher,
					publishedDate,
					thumbnail
				};
			});
			return bookList;
		} else {
			return [];
		}
	} catch (error) {
		console.log('Error fetching data from API:', error);
		return [];
	}
};


export const fetchBookDetails = async (id: string) => {
	try {
		const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
		const data = await response.json();
		if (data) {
			const volumeInfo = data.volumeInfo;
			const saleInfo = data.saleInfo
			const thumbnail = volumeInfo?.imageLinks?.thumbnail || process.env.PUBLIC_URL + '/placeholder.png';
			const description = removeHTMLTags(volumeInfo?.description) || 'No description';
			const title = volumeInfo?.title || 'No title';
			const authors = volumeInfo?.authors || ['Unknown Author'];
			const buyLink = saleInfo?.buyLink || 'Not for sale';
			const amount = saleInfo?.retailPrice && saleInfo?.retailPrice.amount ? saleInfo?.retailPrice.amount : 'Price not specified';
			const currencyCode = amount === 'Price not specified' ? null : saleInfo?.retailPrice?.currencyCode;
			const bookDetails = {
				thumbnail,
				description,
				title,
				authors,
				buyLink,
				amount,
				currencyCode
			};
			return bookDetails;
		}
	} catch (error) {
		console.log('Error fetching data from API:', error);
	}
	return null;
};
