import React, {useState} from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Info from './components/Info';


function App(): JSX.Element {
  
  const [valores, setValores] = useState([]);
  return (
    <>
      <h1>-Typing APP-</h1>
      <hr></hr>
      <h2>Ingrese texto:</h2>
      <Form />
      <Info />
      <Footer />
    </>
  );
}

export default App;
