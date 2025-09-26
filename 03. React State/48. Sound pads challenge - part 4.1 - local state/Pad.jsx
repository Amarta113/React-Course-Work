import React from "react"

export default function Pad(props) {

    const [isOn, setIsOn] = React.useState(props.on)

    const handleClicks = () => {
        setIsOn(!isOn)
    }

    return (
        <button 
            onClick={handleClicks}
            style={{backgroundColor: props.color}}
            className={isOn? "on" : undefined}
        ></button>
    )
}