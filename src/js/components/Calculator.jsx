import React, { useState } from "react";

const Calculator = () => {
    const [total, setTotal] = useState("0")
    const [operator, setOperator] = useState(null)
    const [operateValue, setOperateValue] = useState(null)

    function agregarCifra(key) {
        if (total == "0") {
            setTotal(key)
        }
        else {
            setTotal(total.concat(key))
        }
    }

    function clean() {
        setTotal("0")
        setOperateValue(null)
        setOperator(null)
    }

    function suma() {
        if (operateValue == null) {
            setOperateValue(total)
            setTotal("0")
            setOperator("sum")
        }
        else {
            const a = parseFloat(operateValue)
            const b = parseFloat(total)

            setOperateValue((a + b).toString())
            setTotal("0")
            setOperator("sum")
        }
    }

    function substraction() {
        if (operateValue == null) {
            setOperateValue(total)
            setTotal("0")
            setOperator("subs")
        }
        else {
            const a = parseFloat(operateValue)
            const b = parseFloat(total)

            setOperateValue((a - b).toString())
            setTotal("0")
            setOperator("subs")
        }
    }

    function multi() {
        if (operateValue == null) {
            setOperateValue(total)
            setTotal("0")
            setOperator("multi")
        }
        else {
            const a = parseFloat(operateValue)
            const b = parseFloat(total)

            setOperateValue((a * b).toString())
            setTotal("0")
            setOperator("multi")
        }
    }

    function division() {
        if (operateValue == null) {
            setOperateValue(total)
            setTotal("0")
            setOperator("division")
        }
        else {
            const a = parseFloat(operateValue)
            const b = parseFloat(total)

            setOperateValue((a / b).toString())
            setTotal("0")
            setOperator("division")
        }
    }

    function rest() {
        setTotal(total / 100)
    }

    function coma() {
        setTotal(total.toString())
        if (total.includes(".")) {
            setTotal(total)
        }
        else {
            setTotal(total + ".")
        }
    }

    function negative() {
        if(total.includes("-")) {
            setTotal(total.replace("-",""))
        }
        else {
            setTotal("-" + total)
        }
    }

    function operate () {

        const a = parseFloat(operateValue)
        const b = parseFloat(total)
        if (operateValue != null) {
            if (operator == "sum") {
                setTotal((a + b).toString())         
            }
            else if (operator == "multi") {
                setTotal((a * b).toString())
            }
            else if (operator == "subs") {
                setTotal((a - b).toString())
            }
            else if (operator == "division") {
                setTotal((a / b).toString())
            }
        }
        setOperateValue(null)
        setOperator(null)
    }

    return (
        <div className="bg-black rounded d-flex flex-wrap p-2 pb-3 my-5 mx-auto justify-content-beetwen text-white w-25 fs-1 gap-2" >
            <div className="row bg-dark p-0 mx-auto w-100 rounded overflow-hidden" style={{height: "110px"}}>
                <div className="row h-50 px-0 py-2">
                    <p className="text-end fs-5">{operateValue}</p>
                </div>
                <div className="row px-0 pb-2 h-50">
                    <p className={`text-end ${total.length > 12 ? 'small' : ''}`}>{total}</p>
                </div>
            </div>
            <div className="row mt-2 mx-auto w-100 d-flex flex-nowrap gap-2">
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={clean}>C</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={negative}>+-</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={rest}>%</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={division}>/</button>
                </div>
            </div>
            <div className="row mx-auto w-100 d-flex flex-nowrap gap-2">
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("7")}>7</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("8")}>8</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("9")}>9</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={multi}>X</button>
                </div>
            </div>
            <div className="row mx-auto w-100 d-flex flex-nowrap gap-2">
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("4")}>4</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("5")}>5</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("6")}>6</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={substraction}>-</button>
                </div>
            </div>
            <div className="row mx-auto w-100 d-flex flex-nowrap gap-2">
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("1")}>1</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("2")}>2</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={() => agregarCifra("3")}>3</button>
                </div>
                <div className="col p-0">
                    <button className="btn btn-primary w-100 h-100" onClick={suma}>+</button>
                </div>
            </div>
            <div className="row mx-auto w-100 d-flex flex-nowrap">
                <div className="col-6 p-0 d-flex gap-2 pe-1">

                        <button className="btn btn-primary w-50 h-100 mt-1" onClick={() => agregarCifra("0")}>0</button>


                        <button className="btn btn-primary w-50 h-100 mt-1" onClick={() => coma()}>.</button>

                </div>
                <div className="col-6 p-0 ms-1 pe-1">
                    <button className="btn btn-danger w-100 h-100" onClick={() => operate()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator