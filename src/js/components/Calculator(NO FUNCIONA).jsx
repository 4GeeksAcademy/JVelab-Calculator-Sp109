import React, { useState } from "react";
import Screen from "./Screen";
import SingleComponent from "./SingleComponent";
import DoubleComponent from "./DobleComponent";

const Calculator = () => {

    const [total, setTotal] = useState(0)
    let userValue = null

    const calcular = (key) => {
        if (key == Number) {
            if (key == 0) {
                setTotal(key)
            }
            else {
                setTotal((total * 10) + key)
            }
        }
        else if (key != "=" && key != Number) {
            userValue = total
            setTotal(0)
        }
        else if (key == "=") {
            setTotal(userValue ,total)
        }
    }

    return (
        <div className="bg-black rounded d-flex flex-wrap p-2 my-5 mx-auto justify-content-beetwen" style={{ width: "250px"}}>
            <div className="row p-2 m-0">
                <Screen result={total}/>
            </div>
            <div className="row m-0 w-100 justify-content-between p-1">
                <SingleComponent content="C" onClick={() => calcular()}/>
                <SingleComponent content="+-" onClick={() => calcular("")}/>
                <SingleComponent content="%" onClick={() => calcular("%")}/>
                <SingleComponent content="/" onClick={() => calcular("/")}/>
            </div>
             <div className="row m-0 w-100 justify-content-between p-1">
                <SingleComponent content={7} onClick={() => calcular(7)}/>
                <SingleComponent content={8} onClick={() => calcular(8)}/>
                <SingleComponent content={9} onClick={() => calcular(9)}/>
                <SingleComponent content="X" onClick={() => calcular("*")}/>
            </div> 
            <div className="row m-0 w-100 justify-content-between p-1">
                <SingleComponent content={4} onClick={() => calcular(4)}/>
                <SingleComponent content={5} onClick={() => calcular(5)}/>
                <SingleComponent content={6} onClick={() => calcular(6)}/>
                <SingleComponent content="-" onClick={() => calcular("-")}/>
            </div> 
            <div className="row m-0 w-100 justify-content-between p-1">
                <SingleComponent content={1} onClick={() => calcular(1)}/>
                <SingleComponent content={2} onClick={() => calcular(2)}/>
                <SingleComponent content={3} onClick={() => calcular(3)}/>
                <SingleComponent content="+" onClick={() => calcular("+")}/>
            </div>
            <div className="row m-0 w-100 justify-content-between p-1">
                <SingleComponent content={0} onClick={() => calcular(0)}/>
                <SingleComponent content="." onClick={() => calcular(".")}/>
                <DoubleComponent content="=" onClick={() => calcular("=")}/>
            </div>
        </div>
    )
}

export default CalculatorNO