import React from 'react';
import './ColorBox.css';
import changeColor from './changeColor';

const ColorBox = ({color, id}) => {
    let boxColor = color[Math.floor(Math.random() * color.length)];
    return (
        <div className='ColorBox'>
            <div id={id} className="ColorBox-box" style={{backgroundColor: boxColor}}>
            </div>
            <button className="ColorBox-btn" onClick={ changeColor }>Change</button>
        </div>

    )
}

export default ColorBox