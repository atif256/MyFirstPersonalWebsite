import "./NoMatch.css";
import { useState, useEffect } from "react";

export default function NoMatch() {
  const niceColors = ['red','green','blue','purple','pink', 'orange'];

  // State variable for index into niceColors
  let [index, setIndex] = useState(0); // number

  let styleObject = {
    color : niceColors[index]
  }

  // No 2nd argument (dependency array) is provided 
  // This causes the useEffect callback to run for each
  // time the component loads / renders 
  useEffect(() => {
    setTimeout(() => {
      let newIndexValue = index + 1;
      // Reset the index to 0 when it reaches
      // the end of the array it is indexing
      if (newIndexValue === niceColors.length)
        newIndexValue = 0;      
      setIndex(newIndexValue);
    }, 500);
  });


    return (
      <><div className="NoMatchHeader">
      <h1 style={styleObject}>404: Page not found</h1>
      <p>Looks like the blog you are searching for does not exist</p>
    </div></>
      
    );
}