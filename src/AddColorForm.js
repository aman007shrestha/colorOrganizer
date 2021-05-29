import React, { useState } from "react";
import { useInput } from "./hooks";


export default function AddColorForm({ onNewColor = f => f }){
	const [titleProps, resetTitle] = useInput("");
	const [colorProps, resetColor] = useInput("#000000");
	//const txtTitle = useRef();
	//const hexColor = useRef();
	const submit = e => {
		e.preventDefault();
		onNewColor(titleProps.value, colorProps.value);
		resetTitle();
		resetColor();
		//const title = txtTitle.current.value;
		//const color = hexColor.current.value;
		//onNewColor(title, color);
		//console.log(title, color)
		//setTitle("")
		//setColor("#000000")
		//txtTitle.current.value = "";
		//hexColor.current.value="";
		
	}
	return (
		<form onSubmit={submit}>
			<input 
			//value={title} 
			{...titleProps}
			type="text" 
			placeholder="color title..." 
			//onChange={event => setTitle(event.target.value)}
			required />
			<input 
			//value={color} 
			{...colorProps}
			type="color" 
			//onChange={event => setColor(event.target.value)}
			required />
			<button>Add</button>
		</form>
	);

}