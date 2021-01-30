import React from 'react';
import './style.css';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
	// OverlayView,
} from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '92vh',
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
};

function Map({ centerPoint, onMapLoad }) {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	});
	if (loadError) return 'Error';

	if (!isLoaded) {
		return (
			<div className="col-12 my-auto">
				<div className="mt-3 row justify-content-center">
					<p>Loading...</p>
				</div>
			</div>
		);
	}
	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={centerPoint}
			zoom={10}
			onLoad={onMapLoad}
			options={mapOptions}
		>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	);
}

export default Map;
