import React from "react";  

const Screen = (props) => {
    return (
        <div className="bg-dark text-white py-3 px-1 rounded" style={{width: "220px", height: "50px"}}>
            <p className="text-end">{props.result}</p>
        </div>
    )
}

export default Screen