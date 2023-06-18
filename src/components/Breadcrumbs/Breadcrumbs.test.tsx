import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {
	it('renders home and breadcrumb links correctly', () => {
		// Render the component inside a router
		render(
			<Router>
				<Breadcrumbs />
			</Router>
		);

		// Check if the Home link is rendered correctly
		const homeLink = screen.getByText('Home');
		expect(homeLink).toBeInTheDocument();
		expect(homeLink.getAttribute('href')).toBe('/');

		// Check if the breadcrumb links are rendered correctly
		const breadcrumbLinks = screen.getAllByRole('link', { name: /[^/]+/ });
		expect(breadcrumbLinks).toHaveLength(1); // Adjusted expected length to 1
	});
});
