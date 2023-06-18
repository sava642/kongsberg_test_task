import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import ContentHomePage from '../Content/ContentHomePage';

const HomePage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const toggleModal = () => {
		setIsModalOpen((prevState) => !prevState);
	};

	return (
		<div className="bg-white dark:border-gray-700" >
			<ContentHomePage toggleModal={toggleModal} />
			{isModalOpen && <Modal toggleModal={toggleModal} />}
		</div>
	);
};

export default HomePage;