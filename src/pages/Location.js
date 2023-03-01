import React from "react";
import GoogleMap from "../components/GoogleMap";
import "../styles/Location.css";

const Location = () => {
	return (
		<div className="Location">
			<h1>Atomic Aaron's Location</h1>
			<GoogleMap
				zoom={10}
				center={{ lat: 44, lng: -80 }}
				mapContainerClassName="map-container"
			></GoogleMap>
		</div>
	);
};

export default Location;
