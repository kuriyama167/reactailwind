import React from 'react';
import Draggable from 'react-draggable';

function PopUp() {
    return ( <
        Draggable >
        <
        div className = "bg-white rounded-lg shadow-lg p-6" >
        <
        div className = "flex justify-between items-center mb-4" >
        <
        h2 className = "text-lg font-bold" > Draggable Pop - Up < /h2> <
        button className = "text-gray-500 hover:text-gray-700" >
        <
        svg className = "h-4 w-4 fill-current"
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 20 20" >
        <
        path fillRule = "evenodd"
        d = "M10.293 9.997l4.94-4.94a1 1 0 1 0-1.414-1.414l-4.94 4.94-4.94-4.94a1 1 0 1 0-1.414 1.414l4.94 4.94-4.94 4.94a1 1 0 1 0 1.414 1.414l4.94-4.94 4.94 4.94a1 1 0 1 0 1.414-1.414l-4.94-4.94z"
        clipRule = "evenodd" /
        >
        <
        /svg> <
        /button> <
        /div> <
        p className = "text-gray-700" >
        Drag this pop - up anywhere on the screen!
        <
        /p> <
        /div> <
        /Draggable>
    );
}

export default PopUp;