import React, { useMemo } from 'react';

const Factorial = number => {
  // const factorial = useMemo(() => calculateFactorialOf(number), [number])
  // console.log("fact",factorial);
  console.log({ number });
  return <div />;
};

// const calculateFactorialOf = number =>
//   number <= 0 ? 1 : calculateFactorialOf(number - 1);


export { Factorial };
