import React from "react";
import OutputRow from "./OutputRow";

const Output=props=>{
    return(
        <div>
            <OutputRow value={props.answer} textSize={{fontSize:'20px'}}/>
            <OutputRow value={props.user} textSize={{fontSize:'40px'}}/>

        </div>
    )
}

export default Output;