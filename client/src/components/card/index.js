import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

function CardComponent({ restaurant }) {
	// const [rating, setRating] = useState(0);
	const starArray = [1, 2, 3, 4, 5];
	useEffect(() => {
		ratingAverage();
	}, []);

	const ratingAverage = () => {
		var ratingAvg = 0;
		restaurant.rating.forEach((num) => {
			ratingAvg += num;
		});
		restaurant.ratingAvg = ratingAvg / restaurant.rating.length;
	};

	return (
		<div className="mb-3 mx-3">
			<Card key={restaurant._id} className="bg-dark text-white res-card">
				<Card.Img src={restaurant.image} alt="Card image" />
				<Card.ImgOverlay>
					<Card.Title>
						<div className="row">
							<div className="col-8">
								<p className="mb-0">{restaurant.name}</p>
								<p className="distance">{restaurant.distance} mi</p>
							</div>
							<div className="col-4 d-flex justify-content-end">
								{restaurant.ratingAvg ? (
									<p className="mr-1">{restaurant.ratingAvg}</p>
								) : null}
								{starArray.map(() => {
									// switch (true) {
									// 	case (rating = 0):
									// 		// code block
									// 		break;
									// 	case rating < 1:
									// 		// code block
									// 		break;
									// 	case rating < 2:
									// 		// code block
									// 		break;
									// 	case rating < 3:
									// 		// code block
									// 		break;
									// 	case rating < 4:
									// 		// code block
									// 		break;
									// 	case rating < 5:
									// 		// code block
									// 		break;
									// 	default:
									// 	// code block
									// }
									return (
										<i className="fa fa-star starYellow" aria-hidden="true"></i>
									);
								})}
							</div>
						</div>
					</Card.Title>
				</Card.ImgOverlay>
			</Card>
		</div>
	);
}

export default CardComponent;
