import React from "react";

const SingleComponent = (props) => {
    return (
        <div className="rounded d-grid justify-center p-0" style={{width: "50px", height: "50px"}}>
            <button className="btn btn-primary">
                {props.content}   
            </button>
        </div>
    )
};

export default SingleComponent