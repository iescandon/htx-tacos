import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

function InfoPage({ restaurants, addRating }) {
	const notify = () => toast.dark('Address Copied!');
	const notify2 = () => toast.dark('Rating Received!');
	const [restaurantID, setRestaurantID] = useState('');
	const [rating, setRating] = useState();
	const starArray = [1, 2, 3, 4, 5];

	useEffect(() => {
		setRestaurant();
	}, []);

	const setRestaurant = () => {
		setRestaurantID(window.location.pathname.replace('/', ''));
	};

	return (
		<div className="container mt-4">
			{restaurants.map((res) => {
				if (res._id === restaurantID) {
					return (
						<div className="row">
							<div className="col my-auto">
								<img className="infoImg" src={res.image} alt="" />
							</div>
							<div className="col my-auto">
								<h1 className="infoHeader row justify-content-center">
									{res.name}
								</h1>
								<CopyToClipboard text="2411 S Shepherd Dr, Houston, TX 77019">
									<p
										className="address row justify-content-center"
										onClick={notify}
									>
										{res.address}
									</p>
								</CopyToClipboard>
								<p className="row justify-content-center">{res.phoneNumber}</p>
								<a
									className="row justify-content-center mb-3"
									href={res.website}
								>
									{res.website}
								</a>
								<div className="row justify-content-center">
									{!rating ? (
										<Card className="ratingCard mt-4">
											<Card.Body>
												<p className="row justify-content-center mb-0 cardMessage">
													Rate me
												</p>
												<div className="rating">
													<span
														className="star"
														onClick={() => {
															const r = 5;
															setRating(5);
															addRating(restaurantID, r);
															notify2();
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
											</Card.Body>
										</Card>
									) : (
										<Card className="ratingCard mt-4">
											<Card.Body>
												<div>
													<p className="row justify-content-center mb-0 cardMessage">
														Thank you
													</p>
													{starArray.map((num) => {
														if (rating >= num) {
															return <span className="star starYellow">★</span>;
														} else {
															return <span className="star starYellow">☆</span>;
														}
													})}
												</div>
											</Card.Body>
										</Card>
									)}
								</div>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
}

export default InfoPage;
