import React from 'react';

// The parent component
class ParentComp extends React.Component {
  render() {
    // The new prop to the added.
    let newProp = 'red';
    // Looping over the parent's entire children,
    // cloning each child, adding a new prop.
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, { newProp, }, null);
        })}
      </div>
    );
  }
}
// The child component
class MyButton extends React.Component {
  render() {
    return (<><button style={{ color: this.props.newProp }}>Hello World!</button>{console.log("props",this.props)}</>);
  }
}
export { MyButton, ParentComp };
