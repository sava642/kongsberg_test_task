import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	const handleLearnMore = () => {
		navigate('/');
	};

	return (
		<div className="flex flex-col items-center h-screen">
			<h1 className="text-4xl font-bold mb-4">404 - This page does not exist.</h1>
			<button
				onClick={handleLearnMore}
				className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Home Page
				<svg
					aria-hidden="true"
					className="w-4 h-4 ml-2 -mr-1"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clipRule="evenodd"
					></path>
				</svg>
			</button>
		</div>
	);
};

export default NotFound;
