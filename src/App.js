import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from "react-router-dom";

function App() {
  const [text, setText] = useState('Enable Dark mode')
  const [mode, setMode] = useState('light')
  const [green, setGreen] = useState('Enable Green mode')
  const [alert, setAlert] = useState(null)
  const [btn, setBtn] = useState('primary')

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleGreen = () =>{
    if(mode=== 'light'){
      setMode('dark')
      setGreen('Enable light Mode')
      document.body.style.backgroundColor = '#2b5921'
      setBtn('success')
    }
    else{
      setMode('light')
      setGreen('Enable Green Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been set", "success")
      setBtn('primary')
    }
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      setText('Enable light Mode')
      document.body.style.backgroundColor = '#263051'
      showAlert("Dark mode has been set", "success")
      setBtn('primary')
    }
    else{
      setMode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been set", "success")
      setBtn('primary')
    }
  }

  return (
    <>
    <Router>
    <Navbar title="Sarfraz" mode ={mode} toggleMode={toggleMode} toggleText = {text} toggleGreen={toggleGreen} toggleGreenText = {green}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<TextForm btnType={btn} showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
      </Routes> 
    </div>
    </Router>
    </>
  );
}

export default App;
