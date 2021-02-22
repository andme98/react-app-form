import React, {useState} from 'react';
import Form from './components/Form';
import Info from './components/Info';

function App(): JSX.Element {
  
  const [valores, setValores] = useState([]);
  return (
    <>
      <h1>React APP</h1>
      <hr></hr>
      <h2>Ingrese texto:</h2>
      <Form />
      <Info />
    </>
  );
}

export default App;
