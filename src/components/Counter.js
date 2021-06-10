import React, {useState} from 'react'

const Counter = () => {
  //useState gives me a way to get and set the state.
  // const [getter, setter] = useState(initialValue) general setup of const
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Counter</h1>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};



export default Counter;