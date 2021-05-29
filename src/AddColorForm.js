import React, { useState } from "react";


export default function AddColorForm({ onNewColor = f => f }){
	const [title, setTitle] = useState("");
	const [color, setColor] = useState("#000000");
	//const txtTitle = useRef();
	//const hexColor = useRef();
	const submit = e => {
		e.preventDefault();
		//const title = txtTitle.current.value;
		//const color = hexColor.current.value;
		onNewColor(title, color);
		console.log(title, color)
		setTitle("")
		setColor("#000000")
		//txtTitle.current.value = "";
		//hexColor.current.value="";
		
	}
	return (
		<form onSubmit={submit}>
			<input 
			value={title} 
			type="text" 
			placeholder="color title..." 
			onChange={event => setTitle(event.target.value)}
			required />
			<input 
			value={color} 
			type="color" 
			onChange={event => setColor(event.target.value)}
			required />
			<button>Add</button>
		</form>
	);

}