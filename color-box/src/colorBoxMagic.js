import React, {Component} from 'react';
import "./colorBoxMagic.css";

let createBoxes = () => {
    let boxList = [];
    for( let i = 0; i < 32; i++){
        boxList.push(<div className="magic-box" key={i} style={{backgroundColor: "green"}}></div>);
    }
    return boxList;
};

const CreateColorBox = props => {
    return(
        <div className="App" >
            {createBoxes()}
        </div>
            
    );
};

export default CreateColorBox;