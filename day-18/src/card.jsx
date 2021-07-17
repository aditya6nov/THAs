import React from 'react';
import './App.css';

function White(){
	return(
		<div className="white">
		</div>
	);
}

function Black(){
	return(
		<div className="black">
		</div>
	);
}

var arr3 = ['1','2','1','2','1','2','1','2'];
var arr = ['w','b','w','b','w','b','w','b'];
var arr2 = ['b','w','b','w','b','w','b','w'];

const card = () =>{
    return(
        <div className="card">
            {
                arr3.map((item) => item == 1 ?
                <div className="seq">{(arr.map((it, index) => it === 'w' ? <White key = {index} /> : <Black key = {index} />))}</div> : 
                <div className="seq">{(arr2.map((it, index) => it === 'b' ? <Black key = {index} />: <White key = {index} />  ))}</div>)
            }
        </div>
    );
}

export default card;