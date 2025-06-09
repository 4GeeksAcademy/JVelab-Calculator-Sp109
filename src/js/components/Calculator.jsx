import React, { useState } from "react";

const Calculator = () => {
    const [total, setTotal] = useState(0)

    function agregarCifra(key) {
        if (total == 0) {
            setTotal(key)
        }
        else {
            setTotal((total * 10) + key)
        }
    }

    function suma()

    return (
        <div className="bg-black rounded d-flex flex-wrap p-2 my-5 mx-auto justify-content-beetwen text-white w-25 fs-1" >
            <div className="row bg-dark p-2 mx-auto w-100">
                <p className="text-end my-auto">{total}</p>
            </div>
            <div className="row mt-2 mx-auto w-100 d-flex flex-nowrap">
                <div className="col-3 p-0">
                    <button className="btn btn-primary w-100">C</button>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary w-100">+-</button>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary w-100">%</button>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary w-100">/</button>
                </div>
            </div>
            <div className="row mt-2 mx-auto w-100 d-flex flex-nowrap">
                <div className="col-3 p-0">
                    <button className="btn btn-primary w-100" onClick={() => agregarCifra(1)}>1</button>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary w-100" onClick={() => agregarCifra(2)}>2</button>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary w-100" onClick={() => agregarCifra(3)}>3</button>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary w-100">+</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator