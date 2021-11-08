import React from 'react';
import './ployfill.js'
import Test from './dangerouslySetHtml';
import {
  CustomTextInput,
  FancyButton,
  CustomFunctionalTextInput,
  Parent,
} from './ref';
import { CalculateFactorial } from './useMemo';
import { Factorial } from './factorial';
import { ParentComp, MyButton } from './reactClone';
import './style.css';
import Context, { ContextWrapper } from './contextApi';
import { Counter } from './usereducer';
import ButtonSpinner from './buttonSpinner/index';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(themes.light);

export default function App() {
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef();
  const [theme, setWhiteTheme] = React.useState(false);
  return (
    <ThemeContext.Provider value={theme ? themes.light : themes.dark}>
      <h1>Hello StackBlitz!</h1>
      <Test />
      <CustomTextInput />
      <CustomFunctionalTextInput />
      <Parent />
      <FancyButton ref={ref}>Click me!</FancyButton>
      <button
        onClick={(e) => {
          console.log('r', ref.current);
        }}
      >
        Focus{' '}
      </button>
      Use Memo :
      <CalculateFactorial />
      <Factorial number={4} />
      <ParentComp>
        <ContextWrapper>
          <MyButton />
        </ContextWrapper>
        <br />
        <MyButton />
      </ParentComp>
      <Context />
      <button onClick={(e) => setWhiteTheme(!theme)}>Set White theme</button>
      <Counter />
      <div style={{border:'1px solid black', padding:"10px"}}>Loading spinner in button
      <ButtonSpinner />
      </div>
    </ThemeContext.Provider>
  );
}
