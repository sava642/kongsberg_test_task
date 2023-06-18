import React from 'react';
import { useNavigate } from 'react-router-dom';
interface DrawerProps {
	selectedRow: {
		original: {
			ID: string,
			thumbnail: string,
			title: string,
		}
	}
	setSelectedRow: React.Dispatch<React.SetStateAction<null>>;
}

const Drawer: React.FC<DrawerProps> = ({ selectedRow, setSelectedRow }) => {
	const { thumbnail, title, ID } = selectedRow.original
	const navigate = useNavigate();
	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-25 animate-appear">
			<div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label">
				<h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>Info</h5>
				<button onClick={() => setSelectedRow(null)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
					<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					<span className="sr-only">Close menu</span>
				</button>
				<p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{title}</p>
				<div className="md:w-full">
					<img
						src={thumbnail} alt="Book Thumbnail"
						className="w-full mb-4 h-auto object-cover max-w-full max-h-full"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<button
						onClick={() => {
							navigate(`/search/bookslist/${ID}`);
						}}
						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Learn more
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
			</div>
		</div>
	)
}
export default Drawer