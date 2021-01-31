import React from 'react';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

function InfoPage() {
	const notify = () => toast.dark('Address Copied!');
	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col">
					<img
						className="infoImg"
						src="https://cdn.abcotvs.com/dip/images/5729970_table-shot-above-view.jpg"
						alt=""
					/>
				</div>
				<div className="col my-auto">
					<h1 className="infoHeader row justify-content-center">
						Torchy's Tacos
					</h1>
					<CopyToClipboard text="2411 S Shepherd Dr, Houston, TX 77019">
						<p className="address row justify-content-center" onClick={notify}>
							2411 S Shepherd Dr, Houston, TX 77019
						</p>
					</CopyToClipboard>

					{/* <p>OPEN/CLOSED/HOURS</p> */}
					<p className="row justify-content-center">713-595-8226</p>
					<a
						className="row justify-content-center"
						href="https://torchystacos.com/"
					>
						https://torchystacos.com/
					</a>
					<div className="row justify-content-center mt-3">
						<div class="rating">
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
						{/* <i
							className="fa fa-star star1"
							aria-hidden="true"
							onMouseEnter={() => console.log('1 star rating')}
						></i>
						<i
							className="fa fa-star star2"
							aria-hidden="true"
							onMouseEnter={() => console.log('2 star rating')}
						></i>
						<i
							className="fa fa-star star3"
							aria-hidden="true"
							onMouseEnter={() => console.log('3 star rating')}
						></i>
						<i
							className="fa fa-star star4"
							aria-hidden="true"
							onMouseEnter={() => console.log('4 star rating')}
						></i>
						<i
							className="fa fa-star star5"
							aria-hidden="true"
							onMouseEnter={() => console.log('5 star rating')}
						></i> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoPage;
