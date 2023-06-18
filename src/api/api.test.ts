import { fetchBooks } from './api';
import { fetchBookDetails } from './api';

describe('fetchBooks', () => {
	it('fetches books and returns the formatted book list', async () => {
		global.fetch = jest.fn().mockResolvedValue({
			json: jest.fn().mockResolvedValue({
				items: [
					{
						id: '1',
						volumeInfo: {
							authors: ['Unknown Author'],
							title: 'No title',
							description: 'No description',
							imageLinks: {
								thumbnail: '/placeholder.png',
							},
						},
						saleInfo: {
							buyLink: 'Not for sale',
							retailPrice: {
								amount: 'Price not specified',
								currencyCode: null,
							},
						},
					},
				],
			}),
		});

		const expectedBookList = [
			{
				ID: '1',
				title: 'No title',
				authors: ['Unknown Author'],
				publisher: 'Unknown Publisher',
				publishedDate: expect.any(String),
				thumbnail: '/placeholder.png',
			},
		];

		const searchQuery = 'test';
		const result = await fetchBooks(searchQuery);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=20`
		);

		expect(result).toEqual(expectedBookList);
	});
});


describe('fetchBookDetails', () => {
	it('returns book details when data is returned in the API response', async () => {
		global.fetch = jest.fn().mockResolvedValue({
			json: jest.fn().mockResolvedValue({
				volumeInfo: {
					authors: ['Unknown Author'],
					title: 'No title',
					description: 'No description',
					imageLinks: {
						thumbnail: '/placeholder.png',
					},
				},
				saleInfo: {
					buyLink: 'Not for sale',
					retailPrice: {
						amount: 'Price not specified',
						currencyCode: null,
					},
				},
			}),
		});

		const expectedBookDetails = {
			title: 'No title',
			authors: ['Unknown Author'],
			description: 'No description',
			thumbnail: '/placeholder.png',
			buyLink: 'Not for sale',
			amount: 'Price not specified',
			currencyCode: null,
		};

		const bookId = '123';
		const result = await fetchBookDetails(bookId);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://www.googleapis.com/books/v1/volumes/${bookId}`
		);

		expect(result).toEqual(expectedBookDetails);
	});

	it('returns null when no data is returned in the API response', async () => {
		global.fetch = jest.fn().mockResolvedValue({
			json: jest.fn().mockResolvedValue(null),
		});

		const bookId = '456';
		const result = await fetchBookDetails(bookId);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://www.googleapis.com/books/v1/volumes/${bookId}`
		);

		expect(result).toBeNull();
	});
});
