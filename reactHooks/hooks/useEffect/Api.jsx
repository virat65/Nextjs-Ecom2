import React, { useEffect } from 'react'

const Api = () => {
    useEffect(() => {
        const fetchadataApi = async () => {
            const users = await fetch("https://jsonplaceholder.typicode.com/posts")
            const response = await users.json()
            console.log(response, "response")
        }
        fetchadataApi()
    }, [])
    return (
        <div>
{}

        </div>
    )
}

export default Api
