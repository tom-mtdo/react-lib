import React from 'react';
import './App.css';
import ContextExample from './context';
import StyledComponent from './styled-components';
import MyHoc from './hoc';

function App() {
  return (
    <>
      <MyHoc/>
      <br></br>
      <StyledComponent/>
      <br></br>
      <ContextExample/>
    </>
  );
}

export default App;
