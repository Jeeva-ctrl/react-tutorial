/*
The useMemo is a hook used in the functional component of react that returns a memoized value.

In Computer Science, memoization is a concept used in general when we don't need to recompute the function with a given argument for the next time as it returns the cached result.

useMemo() is a built-in React hook that accepts 2 arguments — a function compute that computes a result and the depedencies array:

const memoizedResult = useMemo(compute, dependencies);
During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.

If during next renderings the dependencies don’t change, then useMemo() doesn’t invoke compute but returns the memoized value.

But if dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it.

That’s the essence of useMemo() hook

*/

import React, { useState, useMemo } from 'react';

export function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(i => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
