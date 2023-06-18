import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../HomePage';

describe('HomePage', () => {
	it('render', () => {
		render(
			<Router>
				<HomePage />
			</Router>
		);
	});
});



