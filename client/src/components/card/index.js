import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

function CardComponent({ restaurant }) {
	const [rating, setRating] = useState(0);
	const starArray = [1, 2, 3, 4, 5];
	useEffect(() => {
		ratingAverage();
	}, []);

	const ratingAverage = () => {
		var ratingAvg = 0;
		// console.log(restaurant.name);
		restaurant.rating.forEach((num) => {
			ratingAvg += num;
		});
		// console.log(`${restaurant.name}${ratingAvg / restaurant.rating.length}`);
		// console.log('------------------');
		setRating(ratingAvg / restaurant.rating.length);
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
								<p className="mr-1">{rating}</p>
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
						{/* <div className="row">
							<div className="col ">2.1 mi</div>
						</div> */}
					</Card.Title>
					{/* <Card.Text>
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</Card.Text>
					<Card.Text>Last updated 3 mins ago</Card.Text> */}
				</Card.ImgOverlay>
			</Card>
		</div>
	);
}

export default CardComponent;
