import React from 'react';
import './style.css';

function CardRating({ restaurant }) {
	const starArray = [1, 2, 3, 4, 5];
	return (
		<div className="col-md-4 col-sm-12 cardRatingDiv">
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
		</div>
	);
}

export default CardRating;
