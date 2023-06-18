import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../HomePage';

describe('HomePage', () => {
	it('should render the component without errors', () => {
		render(
			<Router>
				<HomePage />
			</Router>
		);

		expect(screen.getByText('Recruitment Task 2023')).toBeInTheDocument();
		expect(screen.getByText(/During the execution of the given/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /Сheck the task/i })).toBeInTheDocument();
	});
});
