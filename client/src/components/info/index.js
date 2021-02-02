import React, { useState } from 'react';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import Modal from '../modal';

function InfoComponent({ res, restaurantID, addRating }) {
	const notify = () => toast.dark('Address Copied!');
	const notify2 = () => toast.dark('Rating Received!');
	const [rating, setRating] = useState();
	const starArray = [1, 2, 3, 4, 5];
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="row">
			<Modal show={show} handleClose={handleClose} />
			<div className="col my-auto">
				<img className="infoImg" src={res.image} alt="" />
			</div>
			<div className="col my-auto">
				<h1 className="infoHeader row justify-content-center">{res.name}</h1>
				<CopyToClipboard text="2411 S Shepherd Dr, Houston, TX 77019">
					<p className="address row justify-content-center" onClick={notify}>
						{res.address}
					</p>
				</CopyToClipboard>

				{/* <p>OPEN/CLOSED/HOURS</p> */}
				<p className="row justify-content-center">{res.phoneNumber}</p>
				<a className="row justify-content-center" href={res.website}>
					{res.website}
				</a>
				<div className="row justify-content-center mt-3">
					{!rating ? (
						<div className="rating">
							<span
								className="star"
								onClick={() => {
									const r = 5;
									// setRating(5);
									// addRating(restaurantID, r);
									// notify2();
									handleShow();
								}}
							>
								☆
							</span>
							<span
								className="star"
								onClick={() => {
									const r = 4;
									setRating(4);
									addRating(restaurantID, r);
									notify2();
								}}
							>
								☆
							</span>
							<span
								className="star"
								onClick={() => {
									const r = 3;
									setRating(3);
									addRating(restaurantID, r);
									notify2();
								}}
							>
								☆
							</span>
							<span
								className="star"
								onClick={() => {
									const r = 2;
									setRating(2);
									addRating(restaurantID, r);
									notify2();
								}}
							>
								☆
							</span>
							<span
								className="star"
								onClick={() => {
									const r = 1;
									setRating(1);
									addRating(restaurantID, r);
									notify2();
								}}
							>
								☆
							</span>
						</div>
					) : (
						<div>
							{starArray.map((num) => {
								if (rating >= num) {
									return <span className="star starYellow">★</span>;
								} else {
									return <span className="star starYellow">☆</span>;
								}
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default InfoComponent;
