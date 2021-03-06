import React from "react";
import { FaStar } from "react-icons/fa";

// individual star component
const Star = ({selected = false, onSelect = f => console.log("kkk") }) => (
	<FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);

/*
export default function StarRating() {
	return [
		<FaStar color="red" />,
		<FaStar color="red" />,
		<FaStar color="red" />,
		<FaStar color="grey" />,
		<FaStar color="grey" />
			
	];
}
*/

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {
	return (
		<>
			{createArray(totalStars).map(
				(n, i) => (
					<Star 
					key = {i}
					selected = {selectedStars > i}
					onSelect = {()=>onRate(i+1)}
					/>
				)
			)}
			<p>
			{selectedStars} of {totalStars} stars
			</p>
		</>

	);
}