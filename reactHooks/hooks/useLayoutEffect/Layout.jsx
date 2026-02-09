import React, { useLayoutEffect, useState } from 'react'
// it run before the browser render or paint its similar to useEffect , useEffect run after the browser paint but useLayoutEffect run before the browser pain
const Layout = () => {
    const [colorval, setcolorval] = useState("black")
    useLayoutEffect(() => {
        document.body.style.backgroundColor = colorval
    }, [colorval])
    return (
        <div>
            <h1>Current Background color:{colorval}
            </h1>

            <button onClick={() => setcolorval("red")}>Red</button>
            <button onClick={() => setcolorval("green")}>Green</button>
            <button onClick={() => setcolorval("orange")}>Orange</button>
            <button onClick={() => setcolorval("blue")}>Blue</button>

        </div>
    )
}

export default Layout
