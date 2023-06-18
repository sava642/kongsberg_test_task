import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BookInfo from '../../types';
import { fetchBookDetails } from '../../api/api';


interface BookParams {
	id: string;
	[key: string]: string | undefined;
}


const BookDetails: React.FC = () => {
	const { id } = useParams<BookParams>();
	const [bookInfo, setBookInfo] = useState<BookInfo | null>(null);

	const navigate = useNavigate();
	useEffect(() => {
		const fetchData = async () => {
			if (id) {
				const bookDetails = await fetchBookDetails(id);
				if (bookDetails) {
					setBookInfo(bookDetails);
				}
			}
		};

		fetchData();
	}, [id]);

	const { thumbnail, description, title, authors, buyLink, amount, currencyCode } = bookInfo || {};

	if (!bookInfo) {
		return <div>Loading...</div>;
	}

	return (
		<div className="bg-white rounded shadow-md p-4">
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/3">
					<img
						src={thumbnail} alt="Book cover"
						className="w-full h-auto object-cover max-w-full max-h-full"
					/>
				</div>
				<div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
					<h2 className="text-xl font-semibold">{title}</h2>
					<p className="mt-2 text-gray-600">
						<span className="font-semibold">Author:</span> {authors}
					</p>
					<p className="mt-2 text-gray-600">
						{description}
					</p>
					<div className="flex justify-between items-center mt-4">
						<div>
							<span className="text-gray-500 font-semibold">{amount}</span>
							<span className="text-gray-500 font-semibold ml-1">{currencyCode}</span>
							{currencyCode &&
								<button
									onClick={() => buyLink && (window.location.href = buyLink)} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy</button>}
						</div>
						<button
							onClick={() => {
								navigate(-1)
							}}
							className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded">
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;