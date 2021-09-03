import React from 'react';
import Test from './dangerouslySetHtml';
import {
  CustomTextInput,
  FancyButton,
  CustomFunctionalTextInput,
  Parent
} from './ref';
import { CalculateFactorial } from './useMemo';
import { Factorial } from './factorial';
import { ParentComp, MyButton } from './reactClone';
import './style.css';
import Context from './contextApi';
import  {Counter} from './usereducer'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

export const ThemeContext = React.createContext(themes.light);

export default function App() {
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef();
  const [theme, setWhiteTheme] = React.useState(false);
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
      <CalculateFactorial />
      <Factorial number={4} />
      <ParentComp>
        <MyButton />
        <br />
        <MyButton />
      </ParentComp>
      <ThemeContext.Provider value={theme ? themes.light : themes.dark}>
        <Context />
      </ThemeContext.Provider>
      <button onClick={e => setWhiteTheme(!theme)}>Set White theme</button>

      <Counter/>
    </div>
  );
}
