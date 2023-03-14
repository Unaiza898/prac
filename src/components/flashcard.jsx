import React, { useState } from 'react';


const flashcards = (props) => {

    const [flip, setflip] = useState(false);
    return (
        <div   className='card' >
                 <div className=' front' >
                  
                {props.name}
           
            </div>
            <div className='flashcard'>
                {props.description}
    
            </div>



        </div>


    )
}

export default flashcards;