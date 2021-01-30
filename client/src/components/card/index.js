import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

function CardComponent({ restaurant }) {
	return (
		<div className="m-3">
			<Card key={restaurant._id} className="bg-dark text-white res-card">
				<Card.Img src={restaurant.image} alt="Card image" />
				<Card.ImgOverlay>
					<Card.Title>
						<div className="row">
							<div className="col">{restaurant.name}</div>
							<div className="col d-flex justify-content-end">
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
							</div>
						</div>
						<div className="row">
							<div className="col">2.1 mi</div>
						</div>
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
