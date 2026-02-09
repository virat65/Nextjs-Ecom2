import React, { useState } from 'react'
import MyContext from './MyContext'

const MoneyState = ({ children }) => {
    const dhiram = 100
    const person= {
        name:"ram",
        email:"ram@gmail.com",
        age:22
    }
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <MyContext.Provider value={{ dhiram, counter, setCounter,person }}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default MoneyState
