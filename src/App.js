
import React, { useState } from "react";
import colorData from "./color-data.json";
import './App.css';
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";
import { v4 } from "uuid";

function App() {
  console.log(colorData);
  const [colors, setColors] = useState(colorData);
  console.log("Colors");
  console.log(colors);
  return (
  <>
    <AddColorForm 
      onNewColor={
        (title, color) => {
          const newColors = [
            ...colors, 
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];
          setColors(newColors);
        }
      }
    />

    <ColorList 
      colors={colors}
      onRateColor = {
        (id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? {...color, rating} : color
          );
          console.log("nnnn");
          console.log(newColors);
          setColors(newColors)
          console.log("yy")
          console.log(newColors);
          console.log("JJ")
        }
      }
      onRemoveColor = { id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }} 
    />
  </>
  );
}

export default App;
