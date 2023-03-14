import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cards from "./components/flashcard";

function App() {
  const [count, setCount] = useState(0)

  const goToPreviousFlashcard = () => {
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
      description: "answer of the back  ",


    }
    ,
    {
      name: "3rd flash card",
      description: "answer of the back  ",

    },
    {
      name: "4rth flash card",
      description: "answer of the back  ",

    }


  ]
  return (
    <div className="App">

    {/* here is the componenets */}
           <Cards      
       title={flashcard[count].title}
        description={flashcard[count].description}

      />

<button onClick={goToNextFlashcard}> next</button>
<button onClick={goToPreviousFlashcard}> back </button>

    </div>
  )
}

export default App
