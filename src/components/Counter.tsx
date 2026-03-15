import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return <div>
    <h1>Counter</h1>
    <h2>Count: {count}</h2>
    <button className={classes.button} onClick={increment}>Increment</button>
    <button className={classes.button} onClick={decrement}>Decrement</button>
  </div>;
};
