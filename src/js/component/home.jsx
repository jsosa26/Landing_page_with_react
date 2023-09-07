import React from "react";
import { Comp1Navbar } from "./comp_1_navbar.jsx";
import { Comp2TextAndBottom } from "./comp_2text_and_bottom.jsx";
import { Comp3Cards } from "./comp_3_cards.jsx";
import { Comp4Footer } from "./comp_4_footer.jsx";


//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Comp1Navbar/>
			<div className="mx-3 mb-3">			
				<Comp2TextAndBottom/>
			</div>
			<div className="container" id="box">
				<div className="card-deck d-lg-flex">				   
					<Comp3Cards />
					<Comp3Cards />
					<Comp3Cards />
					<Comp3Cards />
				</div>				
			</div>
			<Comp4Footer/>
		</React.Fragment>
	);
};

export default Home;
