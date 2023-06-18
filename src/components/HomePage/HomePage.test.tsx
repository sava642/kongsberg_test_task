import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
	test('render', () => {
		render(
			<Router>
				<HomePage />
			</Router>
		);
	});
});

