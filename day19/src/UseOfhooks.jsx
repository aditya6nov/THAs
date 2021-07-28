import React, { useState } from 'react';
import "./UseofHooks.css";

const IncBut = () =>{
 const [count,setState] = useState(0);
 const Inc = () =>{
     setState(count+1);
 }

    return(
        < >
        <button className="IncButton" onClick={Inc}>{count}</button>
        </>
    );
}
export default IncBut;
