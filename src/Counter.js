import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
import { useSaveCounterMutation } from './redux/api/api';

function Counter() {
  const [name, setName] = useState("")
  const count = useSelector((state) => state.counter);

  
  const dispatch = useDispatch();
  const [saveCounter, { isLoading }] = useSaveCounterMutation();

  const handleSaveCounter = async () => {
    try {
     
      await saveCounter({counterValue : name});
    
    
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle error, e.g., show an error message
      console.log(error)
    }
  };

  return (
    <div>
        <label>Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <button onClick={handleSaveCounter}>Submit</button>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <button onClick={handleSaveCounter} disabled={isLoading}>
        Save Counter to Database
      </button> */}
    </div>
  );
}

export default Counter;


