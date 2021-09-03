import React from 'react';
import Test from './dangerouslySetHtml';
import {
  CustomTextInput,
  FancyButton,
  CustomFunctionalTextInput,
  Parent
} from './ref';
import  {CalculateFactorial} from './useMemo';
import  {Factorial} from './factorial';
import './style.css';

export default function App() {
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Test />
      <CustomTextInput />
      <CustomFunctionalTextInput />
      <Parent />
      <FancyButton ref={ref}>Click me!</FancyButton>
      <button
        onClick={e => {
          console.log('r', ref.current);
        }}
      >
        Focus{' '}
      </button>
      Use Memo :

      <CalculateFactorial/>

      <Factorial number={4}/>
    </div>
  );
}
