import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CardRating from '../cardRating';
import './style.css';

function CardComponent({ restaurant }) {
	useEffect(() => {
		ratingAverage();
	}, []);

	const ratingAverage = () => {
		var ratingAvg = 0;
		restaurant.rating.forEach((num) => {
			ratingAvg += num;
		});
		if (ratingAvg === 0) {
			restaurant.ratingAvg = ratingAvg;
		} else {
			restaurant.ratingAvg = (ratingAvg / restaurant.rating.length)
				.toFixed(2)
				.replace('.00', '');
		}
	};

	return (
		<div className="mb-3 mx-3">
			<Card key={restaurant._id} className="bg-dark text-white res-card">
				<Card.Img
					src={restaurant.image}
					alt={`tacos from ${restaurant.name}`}
				/>
				<Card.ImgOverlay>
					<Card.Title>
						<div className="row">
							{/* <CardRating className="showWhenMobile" restaurant={restaurant} /> */}
							<div className="col-md-8 col-sm-12">
								<p className="mb-0">{restaurant.name}</p>
								{restaurant.distance ? (
									<p className="distance">{restaurant.distance} mi</p>
								) : null}
							</div>
							<CardRating restaurant={restaurant} />
							{/* <div className="col-md-4 col-sm-12 d-flex justify-content-end">
								{restaurant.ratingAvg ? (
									<div>
										<span className="mr-1">{restaurant.ratingAvg}</span>
										{starArray.map((num) => {
											if (restaurant.ratingAvg >= num) {
												return <span className="star starYellow">★</span>;
											} else {
												return <span className="star">★</span>;
											}
										})}
										<span className="mr-1" id="ratingArrayLength">
											({restaurant.rating.length})
										</span>
									</div>
								) : (
									<div>
										{starArray.map((num) => {
											return (
												<div>
													<span className="star">☆</span>
													<span className="mr-1" id="ratingArrayLength">
														(0)
													</span>
												</div>
											);
										})}
									</div>
								)}
							</div> */}
						</div>
					</Card.Title>
				</Card.ImgOverlay>
			</Card>
		</div>
	);
}

export default CardComponent;
