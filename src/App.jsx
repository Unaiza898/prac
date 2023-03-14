import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cards from "./components/flashcard";

function App() {
  const [count, setCount] = useState(0)

  const goToPreviousFlashcard = () => {
    {console.log(count)}
    if(count > 0){

      setCount(count-1)
    }

  }
  const goToNextFlashcard = () => {
    if(count < flashcard.length -1){

      setCount(count+1)
    }

  }
  // here is an example of the dictionary 


  const flashcard = [
    {
      name: "start",
      description: "Please start the game by pressing the arrow ",
    },
    {
      name: "2nd me ",
      description: "answer of the back 1 ",
    }
    ,
    {
      name: "3rd flash card",
      description: "answer of the back 2 ",

    },
    {
      name: "4rth flash card",
      description: "answer of the back 3  ",

    }


  ]
  return (
    <div className="App">
{console.log(count)}
    {/* here is the componenets */}
           <Cards      
       name={flashcard[count].name}
        description={flashcard[count].description}

      />

{console.log(flashcard)}
      
<button onClick={goToPreviousFlashcard}> back </button>

<button onClick={goToNextFlashcard}> next</button>

    </div>
  )
}

export default App
