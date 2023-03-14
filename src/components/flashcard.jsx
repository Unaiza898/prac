import React from 'react';


const flashcards = (props) => {
    return (
        <div   className='card' >
                 <div >
                  
                {props.name}
           
            </div>
            <div >
                {props.description}
    
            </div>



        </div>


    )
}

export default flashcards;