import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [currentForm, setcurrentForm] = useState('Login');
  const toggleForm = (forName) =>{
    setcurrentForm(forName);
    
  }
  return (
    <div className="App"> 
    {
      currentForm === Login? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
    }   
      <Login/>
    </div>
  );
}

export default App;
