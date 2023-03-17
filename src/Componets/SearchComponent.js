import React from "react";


export default function SearchComponent() {
    return ( <
        div className = " lg:max-w-4xl justify-center items-center py-2" >
        <
        input type = "text"

        placeholder = "Search..."
        className = "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" /
        >
        <
        button className = "ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Search <
        /button> < /
        div >




    );
}