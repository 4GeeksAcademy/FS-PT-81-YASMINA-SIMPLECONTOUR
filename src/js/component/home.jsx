import React from "react";

//include images into your bundle
import { Card } from "./card";
import { LuClock9 } from "react-icons/lu";


//create your first component
const Home = ({ time }) => {
	let simpletime = time.toString().split('').reverse()

	return (
		<>
			<div className=" wrapper d-flex justify-content-center align-items-center p-2 bg-dark gap-1  " >
			    <Card Digit={<LuClock9 />} />
				<Card Digit={Math.floor(time / 100000) % 100000} />
				<Card Digit={Math.floor(time / 10000) % 10000} />
				<Card Digit={Math.floor(time / 1000) % 1000} />
				<Card Digit={Math.floor(time / 100) % 100} />
				<Card Digit={Math.floor(time / 10) % 10} />
				<Card Digit={Math.floor(time % 10)} />

			</div>
		</>
	);
};
export default Home;
