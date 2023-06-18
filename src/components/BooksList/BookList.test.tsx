import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BooksList from './BooksList';
import { fetchBooks } from '../../api/api';

// Mock fetchBooks function
jest.mock('../../api/api', () => ({
	fetchBooks: jest.fn(() => Promise.resolve([])),
}));

describe('BooksList', () => {
	it('fetches books and displays them', async () => {
		// Mock searchQuery prop
		const searchQuery = 'Harry Potter';

		// Render the component
		render(<BooksList searchQuery={searchQuery} />);


		// Wait for books to be fetched and rendered
		await waitFor(() => {
			// Check if books list is displayed
			expect(screen.getByText('Books List')).toBeInTheDocument();
			// Check if the fetchBooks function is called with the correct query
			// eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
			expect(fetchBooks).toHaveBeenCalledWith(searchQuery);
			// Check if the books are displayed
			// eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
			expect(screen.queryAllByTestId('book')).toHaveLength(0); // Assuming there are no books in the mock response
		});
	});
});
