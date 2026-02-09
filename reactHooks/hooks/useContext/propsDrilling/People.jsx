import React, { useContext } from 'react'

import MyContext from '../MyContext'

const People = ({mmmmk}) => {
    const { dhiram, counter, setCounter } = useContext(MyContext)
    console.log(useContext())
    return (
        <div>
            <h1>People</h1>
            <h2>Props: {mmmmk} received in people</h2>
            <h2>Context Dhiram: {dhiram}</h2>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
        </div>
    )
}

export default People
