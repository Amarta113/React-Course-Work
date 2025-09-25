export default function Pad(props) {
   //Code: added className with condition of props.on as true or false
    return (
        <button 
            style={{backgroundColor: props.color}}
            className= {props.on? "on" : ""}
        ></button>
    )
}