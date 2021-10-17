import React, { useState } from "react";



function Calculator() {

    const [number1, setnumber1] = useState("")
    const [number2, setnumber2] = useState("")
    const [operador, setoperador] = useState("")
    const [resultado, setresultado] = useState(0)
    

  const clicknumber= (value) =>{
      if(operador === ""){
          setnumber1(number1+ value)
        }else{
            setnumber2(number2+value)
        }
  }

    const clickoperador = (val) => {
        setoperador(val)
        
    }
    const cleanAll=()=>{
        setnumber2("")
        setnumber1("")
        setoperador("")
        setresultado("")
    }

    const clean= () =>{
        if(operador === ""){
        setnumber1(number1.slice(0,-1)) 
    }else{setnumber2(number2.slice(0,-1))}
    }

    const getresult= () =>{
        switch (operador){
            case "+": 
            setresultado(parseInt(number1) + parseInt(number2))
            break;
            case "-": 
            setresultado(parseInt(number1) - parseInt(number2))
            break;
            case "/": 
            setresultado(parseInt(number1) / parseInt(number2))
            break;
            case "*": 
            setresultado(parseInt(number1) * parseInt(number2))
            break;
        }
    }

    return <>
        <div className="output">
            <div className="anterior">{operador ? number1 + operador :" " }</div>
            <div className="actual">{resultado ? resultado :(!operador ? number1 : number2)}</div>
        </div>

        <div className="contain-buttons">
            <button onClick={cleanAll} className="ac">AC</button>
            <button onClick={clean} className="del">DEL</button>
            <button onClick={()=> clickoperador('*')}className="operadores" >*</button>
            <button onClick={() => clicknumber('8')} className="numbers" >8</button>
            <button onClick={() => clicknumber('1')}className="numbers" >1</button>
            <button onClick={() => clicknumber('2')} className="numbers" >2</button>
            <button onClick={()=> clickoperador('/')} className="operadores" >/</button>
            <button onClick={() => clicknumber('3')} className="numbers" >3</button>
            <button onClick={() => clicknumber('4')} className="numbers" >4</button>
            <button onClick={() => clicknumber('5')} className="numbers" >5</button>
            <button onClick={()=> clickoperador('-')} className="operadores" >-</button>
            <button onClick={() => clicknumber('6')} className="numbers" >6</button>
            <button onClick={() => clicknumber('7')} className="numbers" >7</button>
            <button onClick={() => onclick('9')} className="numbers" >9</button>
            <button onClick={()=> clickoperador('+')} className="operadores" >+</button>
            <button onClick={() => clicknumber('0')} className="numbers">0</button>
            <button onClick={() => clicknumber('.')} className="numbers" >.</button>
            <button onClick={getresult} className="igual" >=</button>
        </div>
    </>

}
export default Calculator