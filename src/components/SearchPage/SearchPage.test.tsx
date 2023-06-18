import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import SearchPage from './SearchPage';

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
}));

describe('SearchPage', () => {
	it('should render the component with search input and submit button', () => {
		render(<SearchPage onSearch={jest.fn()} />);

		const searchInput = screen.getByPlaceholderText('Search');
		const submitButton = screen.getByRole('button', { name: 'Search' });

		expect(searchInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});

	it('should call onSearch and navigate when form is submitted', () => {
		const onSearch = jest.fn();
		const navigate = jest.fn();
		(useNavigate as jest.Mock).mockReturnValue(navigate);
		render(<SearchPage onSearch={onSearch} />);

		const searchInput = screen.getByPlaceholderText('Search');
		const submitButton = screen.getByRole('button', { name: 'Search' });

		fireEvent.change(searchInput, { target: { value: 'book' } });
		fireEvent.click(submitButton);

		expect(onSearch).toHaveBeenCalledTimes(1);
		expect(onSearch).toHaveBeenCalledWith('book');
		expect(navigate).toHaveBeenCalledTimes(1);
		expect(navigate).toHaveBeenCalledWith('/search/bookslist');
	});
});
