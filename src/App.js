import React from "react";
import Test from './dangerouslySetHtml'
import {CustomTextInput , CustomFunctionalTextInput , Parent} from './ref';
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Test/>
      <CustomTextInput/>
      <CustomFunctionalTextInput/>
      <Parent/>
    </div>
  );
}
