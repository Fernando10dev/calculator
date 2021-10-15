import React, { useState } from "react";



function Calculator() {

    const [number1, setnumber1] = useState("")
    const [number2, setnumber2] = useState("")





    return <>
        <div className="output">
            <div className="anterior">dgdf</div>
            <div className="actual">dfgdg</div>
        </div>

        <div className="contain-buttons">
            <button className="ac">AC</button>
            <button className="del">DEL</button>
            <button className="operadores">*</button>
            <button className="numbers">1</button>
            <button className="numbers">2</button>
            <button className="numbers">3</button>
            <button className="operadores">/</button>
            <button className="numbers">4</button>
            <button className="numbers">5</button>
            <button className="numbers">6</button>
            <button className="operadores">-</button>
            <button className="numbers">7</button>
            <button className="numbers">8</button>
            <button className="numbers">9</button>
            <button className="operadores">+</button>
            <button className="numbers">0</button>
            <button className="numbers">.</button>
            <button className="igual">=</button>
        </div>
    </>

}
export default Calculator