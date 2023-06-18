import React, { useMemo, useState } from 'react';
import { useTable, Column } from 'react-table';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import Drawer from '../Drawer/Drawer';
import Book from '../../types';

interface BookTableProps {
	books: Book[];
}

const BookTable: React.FC<BookTableProps> = ({ books }) => {
	const [selectedRow, setSelectedRow] = useState(null)
	const data = useMemo(() => books, [books]);
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const columns = useMemo<Column<Book>[]>(
		() => {
			if (isMobile) {
				return [
					{ Header: 'Title', accessor: 'title' },
					{ Header: 'Authors', accessor: 'authors' },
				];
			} else {
				return [
					{ Header: 'Title', accessor: 'title' },
					{ Header: 'Catalogue number', accessor: 'ID' },
					{ Header: 'Authors', accessor: 'authors' },
					{ Header: 'Publisher', accessor: 'publisher' },
					{ Header: 'Published Date', accessor: 'publishedDate' },
				];
			}
		},
		[isMobile]
	);
	const handleRowSelection = (row: any) => {
		setSelectedRow(row);
	};

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable<Book>({ columns, data });

	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-16 text-left text-gray-500 dark:text-gray-400 border-collapse" {...getTableProps()} >
				<thead className="text-20 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th scope="col" className="px-6 py-3"{...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row);
						const isRowSelected = selectedRow === row;
						const rowClasses = cn('bg-white border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-yellow-100 sm:hover:bg-yellow-100 cursor-pointer', {
							'bg-yellow-400': isRowSelected,
						});
						return (
							<tr
								className={rowClasses}
								{...row.getRowProps()}
								onClick={() => handleRowSelection(row)}
							>
								{row.cells.map(cell => (
									<td
										className="px-6 py-4"
										{...cell.getCellProps()}>{cell.render('Cell')}</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			{selectedRow && (
				<Drawer selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
			)}
		</div >
	);
};

export default BookTable;




