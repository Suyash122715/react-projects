import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)
  //let counter = 5;
  const addValue=()=>{
    //counter+=1;
    console.log("clicked",counter)
    setCounter(counter+1)
  }
  const subValue=()=>{
    if(counter<=0){
      alert("Cant go below 0")
      return;
    }
    else setCounter(counter-1)
  }
  return (
    <>
     <h1> Hooks, counter app</h1>
     <h2> Counter Value: {counter}</h2>

     <button
     onClick={addValue}> Add Value</button>
     <br/>
     <button onClick={subValue}> Subtract Value</button>
    </>
  )
}

export default App
