import React from "react";

const useCard = (props) =>{
    return <div className="card" style={props.style}>
        <div>{props.name}</div>
       
        <img src= {props.vitelogo} alt="Vite logo"/>
        {/* <img src= "../assets/react.svg" alt="Vite logo"/>  not works. */}
        <div>{props.des}</div>

        {/* props mein image pass bhi hoti hai  */}
    </div>
}
export default useCard