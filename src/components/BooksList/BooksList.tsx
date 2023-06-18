import React, { useEffect, useState } from 'react';
import BookTable from '../BookTable';
import { fetchBooks } from '../../api/api';
import Book from '../../types';

interface Props {
	searchQuery: string;
}

const BooksList: React.FC<Props> = ({ searchQuery }) => {
	const [books, setBooks] = useState<Book[]>([]);
	useEffect(() => {
		const query = searchQuery || localStorage.getItem('searchQuery');
		if (query) {
			const fetchData = async () => {
				const bookList = await fetchBooks(query);
				setBooks(bookList);
			};
			fetchData();
		}
	}, [searchQuery]);

	return (
		<>
			<h1 className="text-2xl font-bold mb-4">Books List</h1>
			<BookTable books={books} />
		</>
	);
};

export default BooksList;
