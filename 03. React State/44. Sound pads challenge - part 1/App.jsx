import pads from "./pads"
import React from "react"


export default function App() {
    // Code : create states
    const [values, setValues] = React.useState(pads)

    // Mapping over states
    const padItems = values.map(value => (
        <button key={value.id}></button>
    )
    )
    return (
        <main>
            <div className="pad-container">
                {
                /* <button>s go here */
                padItems
                }
            </div>
        </main>
    )
}
