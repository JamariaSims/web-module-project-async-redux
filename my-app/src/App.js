import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { dummyData } from "./dummyData";

const App = props => {
	// useEffect(() => {
	// 	// "https://api.jikan.moe/v3/search/manga?q=Grand%20Blue&page=1"
	// 	axios
	// 		.get("https://api.jikan.moe/v3/search/manga?q=Grand%20Blue&page=1")
	// 		.then((res) => {
	// 			console.log(res.data.results);
	// 			setState(res.data.results);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error.error);
	// 		});
	// }, []);
	return (
		<div className="App">
			<div className="NavBar"></div>
			<div className="Main">
				<div className="MainTitle"></div>
				<div className="Showcase"></div>
				<div className="Sideview"></div>
			</div>
			{/* <h1>Anima</h1>
			<h3>Find your anime here</h3>
			<form className="form">
				<label>
					Type Here
					<input type="text" id="input" />
				</label>
			</form>

			<div class="animeList">
				{dummyData.map((item) => (
					<img alt="" src={item.image_url} />
				))}
			</div> */}
		</div>
	);
}
const mapStateToProps = (State) => {
	return {};
};
export default connect(mapStateToProps, {})(App);
