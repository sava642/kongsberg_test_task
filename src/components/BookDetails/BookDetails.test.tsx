import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import BookDetails from './BookDetails';

describe('BookDetails', () => {
	test('render', async () => {
		render(
			<Router initialEntries={['/books/123']}>
				<BookDetails />
			</Router>
		);

	});
});
