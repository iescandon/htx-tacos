import React from 'react';
import './style.css';

function Search({ search, handleInputChange, getLatAndLong }) {
	return (
		<div>
			<div className="row justify-content-center">
				Search by Address or Zip Code:
			</div>

			<div className="row justify-content-center">
				<form
					onSubmit={(event) => getLatAndLong(search, event)}
					className="justify-content-center text-center form-inline my-2 my-lg-0 mapsearch"
				>
					<input
						className="form-control search-form mr-sm-2"
						value={search}
						type="search"
						aria-label="Search"
						onChange={(event) => handleInputChange(event)}
					/>
				</form>
			</div>
		</div>
	);
}

export default Search;
