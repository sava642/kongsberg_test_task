import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ContentHomePageProps {
	toggleModal: () => void;
}

const ContentHomePage: React.FC<ContentHomePageProps> = ({ toggleModal }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/search');
	};

	return (
		<div className="bg-white dark:border-gray-700" data-testid="content-home-page">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recruitment Task 2023</h5>
			<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
				During the execution of the given
				<span
					className="ml-1 text-blue-500 cursor-pointer font-bold"
					onClick={toggleModal}
				>task</span>, I used the provided Google Books API to retrieve data.For styling, I utilized Tailwind CSS, which is extensible, flexible, and easy to use, aiding in the creation
				of visually appealing and responsive applications. The react-table library was chosen for its convenient data
				management and table functionality, as well as its flexibility and customization options. It also provides
				support for handling large amounts of data and benefits from an active developer community.Additionally, the project includes the implementation of breadcrumb functionality to display the path or hierarchy of the selected row.For the test I used Libery's built-in React Testing.
			</p>
			<button
				onClick={handleClick}
				className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Сheck the task
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

export default ContentHomePage;
