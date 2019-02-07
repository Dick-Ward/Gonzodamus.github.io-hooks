import React, { useState, useEffect } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"


  const [name, yellIt] = useState("teddy");
  const [colorCount, setColor] = useState(0)
  const [dog, setDog] = useState("")


  useEffect(() =>{
    if(dog === ""){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(dog => {
      setDog(dog.message)
    })
    }
  })


  const colors = ["cyan", "magenta", "red", "violet", "indigo", "black", "yellow"]
  const changeColors = () =>{
     yellIt(name + "y")
    if (colorCount <= colors.length -1){
      setColor(colorCount +1)
    } else {
      setColor(0)
    }
  }
  return (
    <div>
    <button onClick={changeColors}>
    Click me
    </button>
      <p>My name is <span style={{color: colors[colorCount],   fontSize: "3rem"}} >{name}</span></p>
      {dog !== "" && <img style={{maxHeight: "300px", maxWidth: "300px  "}} src={dog} />}
    </div>
  );
}

export default App;
