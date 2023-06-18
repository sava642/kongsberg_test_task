import React from 'react';
import { render, screen } from '@testing-library/react';
import BookTable from './BookTable';

const mockBook = {
	ID: '1',
	title: 'Mock Book',
	authors: ['Mock Author'],
	publisher: 'Mock Publisher',
	publishedDate: '2022-01-01',
	thumbnail: '/path/to/image.jpg',
};

const mockBooks = [mockBook];

describe('BookTable', () => {
	test('renders book table correctly', () => {
		render(<BookTable books={mockBooks} />);

		const titleCell = screen.getByText('Mock Book');
		expect(titleCell).toBeInTheDocument();

		const authorsCell = screen.getByText('Mock Author');
		expect(authorsCell).toBeInTheDocument();

		const publisherCell = screen.getByText('Mock Publisher');
		expect(publisherCell).toBeInTheDocument();

		const publishedDateCell = screen.getByText('2022-01-01');
		expect(publishedDateCell).toBeInTheDocument();
	});

});
