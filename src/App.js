
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [page, setPage] = useState('Home');
   const toggleMode = (e)=>{
    let val = e.target.value;
    let navColor = document.getElementById("navColor");
    let textAreaColor = document.getElementById("mytextArea");
    if(val==='black' && page==='Home'){
      navColor.style.backgroundColor='darkslategray';
      textAreaColor.style.backgroundColor='darkslategray';
      textAreaColor.style.color='aliceblue';
      document.body.style.backgroundColor='black';
      setMode('dark');
      console.log("hyy");
    }else if(val==='white' && page==='Home'){
      navColor.style.backgroundColor='rgb(198 190 190)';
      document.body.style.backgroundColor='white';
      textAreaColor.style.backgroundColor='white';
      textAreaColor.style.color='black';
      setMode('light');
    }else if(val==='blue' && page==='Home'){
      navColor.style.backgroundColor='#af94c4';
      document.body.style.backgroundColor='#dbacff';
      textAreaColor.style.backgroundColor='#543e60';
      textAreaColor.style.color='aliceblue';
      setMode('dark');
    }else if(val==='purple' && page==='Home'){
      navColor.style.backgroundColor='#85538d';
      document.body.style.backgroundColor='#571e4e';
      textAreaColor.style.backgroundColor='#4d305c';
      textAreaColor.style.color='aliceblue';
      setMode('dark');
    }else if(val==='green' && page==='Home'){
      navColor.style.backgroundColor='rgb(91 157 87)';
      document.body.style.backgroundColor='#67a25b';
      textAreaColor.style.backgroundColor='#4f8761';
      textAreaColor.style.color='aliceblue';
      setMode('dark');
    }
  }

  const pageChange = (e)=>{
    let val = e.target.innerText;
    let navColor = document.getElementById("navColor");
    if(val==="Home"){  
      setPage('Home');
      console.log("ho")
    }else if(val==="About"){
      setPage('About');
      navColor.style.backgroundColor='rgb(198 190 190)';
      document.body.style.backgroundColor='white';
      console.log("ab")
    }
  }

  return (
    <>
    <Router>
    <Navbar  mode={mode}  toggleMode={toggleMode} pageChange={pageChange}/>
    <Routes>
      <Route path="/"  element={<Textarea mode={mode}/>}/>
      <Route path="/about"  element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
