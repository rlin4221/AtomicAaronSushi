import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/sushi.jpg";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
			<div className="headerContainer">
				<h1> Atomic Aaron's Sushi</h1>
				<p> Bring Your Chopsticks</p>
				<Link to="/menu">
					<button> ORDER NOW </button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
