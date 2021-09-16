import React, { useContext } from 'react';

import { ThemeContext } from './App';

function Context() {
  return <Toolbar />;
}
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  console.log("theme",theme)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export const ContextWrapper = (Componenent) => (props) =>
  (
    <ThemeContext.Consumer>
      {(theme) => <Componenent {...props} {...theme} />}
    </ThemeContext.Consumer>
  );

export default Context;
