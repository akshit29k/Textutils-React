
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
  const [page, setPage] = useState(window.location.pathname==="/Textutils-React/about"?'About':'Home');
  
   const toggleMode = (e)=>{
    let val = e.target.value;
    let navColor = document.getElementById("navColor");
    let textAreaColor = document.getElementById("mytextArea");
    if(val==='black'){
      if(page==='Home'){
      navColor.style.backgroundColor='darkslategray';
      textAreaColor.style.backgroundColor='darkslategray';
      textAreaColor.style.color='aliceblue';
      document.body.style.backgroundColor='black';
      setMode('dark');}
      else{
        navColor.style.backgroundColor='darkslategray';
        document.body.style.backgroundColor='black';
      }
    }else if(val==='white'){
      if(page==='Home'){
        navColor.style.backgroundColor='rgb(198 190 190)';
        document.body.style.backgroundColor='white';
        textAreaColor.style.backgroundColor='white';
        textAreaColor.style.color='black';
        setMode('light');
      }else{
        navColor.style.backgroundColor='rgb(198 190 190)';
        document.body.style.backgroundColor='white';
      }
    }else if(val==='blue'){
      if(page==='Home'){
        navColor.style.backgroundColor='#af94c4';
      document.body.style.backgroundColor='#dbacff';
      textAreaColor.style.backgroundColor='#543e60';
      textAreaColor.style.color='aliceblue';
      setMode('dark');
      }else{
        navColor.style.backgroundColor='#af94c4';
      document.body.style.backgroundColor='#dbacff';
      }
    }else if(val==='purple'){
      if(page==='Home'){
        navColor.style.backgroundColor='#85538d';
      document.body.style.backgroundColor='#571e4e';
      textAreaColor.style.backgroundColor='#4d305c';
      textAreaColor.style.color='aliceblue';
      setMode('dark');
      }else{
        navColor.style.backgroundColor='#85538d';
        document.body.style.backgroundColor='#571e4e';
      }
    }else if(val==='green'){ 
      if(page==='Home'){
        navColor.style.backgroundColor='rgb(91 157 87)';
      document.body.style.backgroundColor='#67a25b';
      textAreaColor.style.backgroundColor='#4f8761';
      textAreaColor.style.color='aliceblue';
      setMode('dark');
      }else{
        navColor.style.backgroundColor='rgb(91 157 87)';
      document.body.style.backgroundColor='#67a25b';
      }
    }
  }

  const pageChange = (e)=>{
    let val = e.target.innerText;
    if(val==="Home"){  
      setPage('Home');
    }else if(val==="About"){
      setPage('About');
    }
  }

  return (
    <>
    <Router>
    <Navbar  mode={mode}  toggleMode={toggleMode} pageChange={pageChange}/>
    <Routes>
      <Route path="/Textutils-React"  element={<Textarea mode={mode}/>}/>
      <Route path="/Textutils-React/about"  element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
