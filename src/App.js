
import React, { useState } from "react";
import colorData from "./color-data.json";
import './App.css';
import ColorList from "./ColorList.js";

function App() {
  console.log(colorData);
  const [colors, setColors] = useState(colorData);
  console.log("Colors");
  console.log(colors);
  return <ColorList 
    colors={colors}
    onRateColor = {
      (id, rating) => {
        const newColors = colors.map(color =>
          color.id === id ? {...color, rating} : color
        );
        setColors(newColors)
      }
    }
    onRemoveColor = { id => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors);
    }} 
  />
}

export default App;
