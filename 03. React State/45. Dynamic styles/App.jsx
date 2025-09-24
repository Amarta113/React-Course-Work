import React from "react"
import padsData from "./pads"

export default function App(props) {
    const [pads, setPads] = React.useState(padsData)
    
    // Set ternary operator to check the prop is true or false 
    // and set background color as per true or false value
    const styles = {
        backgroundColor: props.darkMode? "#222222" : "#cccccc"
    }
    
    // Added style in button
    const buttonElements = pads.map(pad => (
        <button style={styles} key={pad.id}></button>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
