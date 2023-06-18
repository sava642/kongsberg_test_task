import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import Drawer from './Drawer';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

describe('Drawer', () => {
	const mockSelectedRow = {
		original: {
			ID: '123',
			thumbnail: 'image.jpg',
			title: 'Book Title',
		},
	};
	const mockSetSelectedRow = jest.fn();
	const mockNavigate = jest.fn() as jest.MockedFunction<NavigateFunction>;

	beforeEach(() => {
		(useNavigate as jest.Mock).mockImplementation(() => mockNavigate);
	});

	test('should render the component with correct content', () => {
		render(
			<Drawer selectedRow={mockSelectedRow} setSelectedRow={mockSetSelectedRow} />
		);

		expect(screen.getByText('Info')).toBeInTheDocument();
		expect(screen.getByText('Book Title')).toBeInTheDocument();
		expect(screen.getByRole('img', { name: /Book Thumbnail/i })).toBeInTheDocument();
		expect(screen.getByText('Learn more')).toBeInTheDocument();
	});

	test('should call navigate when "Learn more" button is clicked', () => {
		render(
			<Drawer selectedRow={mockSelectedRow} setSelectedRow={mockSetSelectedRow} />
		);

		fireEvent.click(screen.getByText('Learn more'));
		expect(mockNavigate).toHaveBeenCalledWith('/search/bookslist/123');
	});
});
