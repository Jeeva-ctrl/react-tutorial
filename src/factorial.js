import React, { useMemo } from 'react';

const Factorial = props => {
  const { number } = props;
  const factorial = useMemo(() => calculateFactorialOf(number), [number]);
  return <div>factorial is - {factorial}</div>;
};

const calculateFactorialOf = number =>
  number <= 0 ? 1 : number * calculateFactorialOf(number - 1);

export { Factorial };
