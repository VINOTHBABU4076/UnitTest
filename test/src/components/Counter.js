import React,{useState} from 'react'

const Counter = () => {
    const[counter,setCounter]=useState(1)

      const incrementcount = () =>{
           setCounter((prevcount) =>prevcount+1)
      }
      const decrementcount = () =>{
        setCounter((prevcount) =>prevcount-1)
   }
  return (
    <div>
        <button data-testid='increment' onClick={incrementcount}>increase</button>
        <p data-testid='counter'>count: {counter}</p>
        <button data-testid='decrement' onClick={decrementcount}>decrease</button>
    </div>
  )
}
export default Counter
