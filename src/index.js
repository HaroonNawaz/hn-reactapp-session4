import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Message} from './message.js';


function Room(){
  
  const [isLit, setLit] = React.useState(true);
  const brightness = isLit ? 'lit' : 'dark';
  let [count, setCount]=React.useState(22);
  //const lightedness = isLit ? 'Lit' : 'dark';

  return (
      <div className = {`room ${brightness}`}>
        the room is {brightness}
        <br/>
        <button onClick={()=> setLit(true)}>Lite On</button>
        <button onClick={()=> setLit(false)}>Lite off</button>
        set temperature here 
        <br/>
        <br/>
        <br/>
        <Message counter={count}/>
        <button onClick={()=> setCount(count +1)}>Increase temperature</button>
        <button onClick={()=> setCount(count -1)}>Decrease temperature</button>

      </div>
  );

}
ReactDOM.render(<Room/>, document.getElementById("root"));