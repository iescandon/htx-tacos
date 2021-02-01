import React, { useState, useEffect } from 'react';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

function InfoPage({ restaurants }) {
	const notify = () => toast.dark('Address Copied!');
	const [restaurantID, setRestaurantID] = useState('');

	useEffect(() => {
		setRestaurant();
	}, []);

	const setRestaurant = () => {
		// let param = window.location.pathname;
		// // let paramEdit = param.replace(/%20/g, ' ').replace('/', '');
		// 		let paramEdit = param.replace('/', '');
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

								{/* <p>OPEN/CLOSED/HOURS</p> */}
								<p className="row justify-content-center">{res.phoneNumber}</p>
								<a className="row justify-content-center" href={res.website}>
									{res.website}
								</a>
								<div className="row justify-content-center mt-3">
									<div className="rating">
										<span
											className="star"
											onClick={() => console.log('5 star rating')}
										>
											☆
										</span>
										<span
											className="star"
											onClick={() => console.log('4 star rating')}
										>
											☆
										</span>
										<span
											className="star"
											onClick={() => console.log('3 star rating')}
										>
											☆
										</span>
										<span
											className="star"
											onClick={() => console.log('2 star rating')}
										>
											☆
										</span>
										<span
											className="star"
											onClick={() => console.log('1 star rating')}
										>
											☆
										</span>
									</div>
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
