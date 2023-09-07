import React from "react";
import { comp_1_navbar } from "./comp_1_navbar";
import { comp_2text_and_bottom } from "./comp_2text_and_bottom";
import { comp_3_cards } from "./comp_3_cards";
import { comp_4_footer } from "./comp_4_footer";


//create your first component
const Home = () => {
	return (
		<React.Fragment>
		<comp_1_navbar/>
		<div className="mx-3 mb-3">			
				<comp_2text_and_bottom/>
			</div>
			<div className="container" id="box">
			<div className="card-deck d-lg-flex">
							   
				<comp_3_cards />
				<comp_3_cards />
				<comp_3_cards />
				<comp_3_cards />
				</div>				
			</div>
			<comp_4_footer/>
		</React.Fragment>
	);
};

export default Home;
