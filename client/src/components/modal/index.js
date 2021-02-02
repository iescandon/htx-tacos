import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css';
import { toast } from 'react-toastify';

function ModalComponent({
	show,
	handleClose,
	addRating,
	rating,
	restaurantID,
	setRating,
}) {
	const notify = () => toast.dark('Rating Received!');
	let r = 0;
	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Rate</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to submit your {r} star rating?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						No
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							r = 5;
							setRating(5);
							addRating(restaurantID, r);
							handleClose();
							notify();
						}}
					>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default ModalComponent;
