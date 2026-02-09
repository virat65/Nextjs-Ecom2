import React, { useState } from 'react'

const Counter = () => {
   
    const [counter,setCounter]= useState(0)
    const increment = () => {
        setCounter((pre)=>pre+1)
        console.log("increament")
      
    }
    const decreament = () => {
      setCounter(counter-1)
        console.log("DEcreament") 
          
    }
    return (
        <div>
            <h1>

                Counter:{counter}
            </h1>

            <button onClick={() => increment()}>Increased By 1</button>
            <button onClick={() => decreament()}>Decreased By 1</button>
        </div>
    )
}

export default Counter
