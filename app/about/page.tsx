"use client"

const aboutPage = () => {
    
    console.log("is this in the server or the client?")
    
        return (
        <>
            <h1>ABOUT PAGE</h1>
            <button onClick={() => window.alert('Hello, World!')}>Click me</button>
       
        </>
    )
}

export default aboutPage