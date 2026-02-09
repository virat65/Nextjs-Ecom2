import React, { useEffect, useState } from 'react'


const FetchData = () => {
    const [counter, setcounter] = useState(0)
    useEffect(() => {
        console.log("useEffect is running")
        document.title = counter
        // useEffect hooks runs when our browser refresh and re-render automatically
    }, [counter]) //depencies arrayuuuuui   k                                                                                                                                                                                                                                                                                                                                                               uikiu
    return (
        <div>
            <h1>Counter:{counter}</h1>

            <button onClick={() => setcounter(counter + 1)}>Increased  1</button>
            <button onClick={() => setcounter(counter - 1)}>Decreased By 1</button>
        </div>
    )
}

export default FetchData
