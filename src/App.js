import React from "react";
import ReactDOM from "react-dom";
//import "./src/App.css";

function Room(){
  const [isLit, setLit] = React.useState(true);
  const lightedness = isLit ? 'Lit' : 'dark';

  return (
      <div className = {'room ${lightedness'}>
        the room is {lightedness}
        <br/>
        <button onClick={()=> setLit(!isLit)}>Toggle</button>
      </div>
  );

}
ReactDOM.render(<Room/>, document.getElementById("root"));