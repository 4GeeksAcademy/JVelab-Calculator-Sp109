import React from "react";

const DoubleComponent = (props) => {
    return (
        <div className="text-white rounded d-grid p-0" style={{width: "108px", height: "50px"}}>
            <button className="btn btn-danger">
              {props.content}    
            </button>
        </div>
    )
};

export default DoubleComponent