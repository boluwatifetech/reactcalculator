import React,{useState} from 'react'
import './main.css'
import {FaCalculator} from 'react-icons/fa'
function App(){
    const [result,setResult]=useState('')
const Handleclick=(e)=>{
    setResult(result.concat(e.target.name))
}
const clearOut=()=>{
    setResult('')
}
const backSpace=()=>{
    setResult(result.slice(0,-1))
}
const calculate=()=>{
    try{
setResult(eval(result.toString()))
    }
catch(err){
    setResult('big fat error')
}
}
    return(
        <div className='cover-all'>
        <h1>simple arithmetic <FaCalculator className="fa"/></h1>
            <div className='container'>
                <input type='text' value= {result}/>

                <div className='buttons'>
 <button  className='complete' onClick={clearOut}>clear</button>
    
     
      <button  className='complete' onClick={backSpace}>c</button>
     
    
  <button  name='1' onClick={Handleclick}>1</button>
   <button  name='-'  onClick={Handleclick}>-</button>
    <button  name='2' onClick={Handleclick}>2</button>
  <button  name='3' onClick={Handleclick}>3</button>
     
      <button  name='4' onClick={Handleclick}>4</button>
       <button  name='+' onClick={Handleclick}>+</button>
 <button  name='5' onClick={Handleclick}>5</button>
 <button  name='6' onClick={Handleclick}>6</button>
   <button  name='7' onClick={Handleclick}>7</button>
   <button name='*' onClick={Handleclick}>*</button>
     <button  name='8' onClick={Handleclick}>8</button>
  <button  name='9' onClick={Handleclick}>9</button>
   <button  name='.' onClick={Handleclick}>.</button>
   <button  name='/' onClick={Handleclick}>/</button>
 
   <button  className='complete' onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}
export default App
