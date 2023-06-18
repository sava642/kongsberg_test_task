import React, { useState } from 'react';

interface ModalProps {
	toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ toggleModal }) => {
	const [zoomLevel, setZoomLevel] = useState(1);

	const handleZoomIn = () => {
		setZoomLevel((prevZoom) => prevZoom + 0.3);
	};

	const handleZoomOut = () => {
		setZoomLevel((prevZoom) => prevZoom - 0.3);
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-25 animate-appear" data-testid="modal" >
			<div className="w-full max-w-[550px] bg-white relative mx-4 max-h-[calc(100vh-40px)] text-left flex flex-col overflow-hidden shadow-lg animate-slide-in duration-500">
				<div className="flex justify-end z-20">
					<button
						onClick={handleZoomIn}
						className="px-3 py-2 m-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Zoom In
					</button>
					<button
						onClick={handleZoomOut}
						className="px-3 py-2 m-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						data-testid='zoom-out-button'
					>
						Zoom Out
					</button>
					<button
						onClick={toggleModal}
						className="px-3 py-2 m-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
					>
						Close
					</button>
				</div>
				<div
					className="overflow-auto flex-grow"
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					<img
						src={process.env.PUBLIC_URL + '/task.png'}
						alt="Task"
						style={{ transform: `scale(${zoomLevel})` }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Modal;
