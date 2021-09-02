import React, { useRef } from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.textInpu1 = null;
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

function CustomFunctionalTextInput(props) {
  // textInput must be declared here so the ref can refer to it
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="text" ref={props.inputRef} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <>
        <CustomFunctionalTextInput inputRef={el => (this.inputElement = el)} />
        <button onClick={e => (this.inputElement.value = 'ee')}>
          Click Me
        </button>
      </>
    );
  }
}


const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));



export { CustomTextInput,FancyButton, CustomFunctionalTextInput, Parent };
