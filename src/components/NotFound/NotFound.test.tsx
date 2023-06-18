import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import NotFound from './NotFound';

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
}));

describe('NotFound', () => {
	it('renders the component correctly', () => {
		render(<NotFound />);
		expect(screen.getByText('404 - This page does not exist.')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Home Page' })).toBeInTheDocument();
	});

	it('navigates to the home page when the button is clicked', () => {
		const mockNavigate = jest.fn();
		(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

		render(<NotFound />);

		const button = screen.getByRole('button', { name: 'Home Page' });
		fireEvent.click(button);

		expect(mockNavigate).toHaveBeenCalledWith('/');
	});
});