import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs: React.FC = () => {

	const location = useLocation();
	const crumbs = location.pathname
		.split('/')
		.filter(crumb => crumb !== '')
		.map((crumb, index, array) => {
			let capitalizedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);
			const path = array.slice(0, index + 1).join('/');
			if (crumb === "bookslist") {
				capitalizedCrumb = "Books List"
			}
			return (
				<li className="flex items-center" key={crumb}>
					<svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
					<Link
						to={`/${path}`}
						className="inline-flex items-center text-16 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
					>
						{capitalizedCrumb}
					</Link>
				</li>
			);
		});

	return (
		<nav className="flex flex-wrap mb-6 items-center" aria-label="Breadcrumb">
			<ol className="inline-flex flex-wrap items-center space-x-1 md:space-x-3">
				<li className="inline-flex items-center">
					<Link to={`/`} className="inline-flex items-center text-16 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
						<svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
						Home
					</Link>
				</li>
				{crumbs}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;