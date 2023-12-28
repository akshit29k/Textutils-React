import React , {useState} from "react"

export default function Textarea(props){
    const [text, setText] = useState('Enter Text Here')
    const handleOnChange = (event) =>{
        setText(event.target.value);
        console.log("hyy");
    }
    const convertToUpper = () =>{
       let newText = text.toUpperCase();
       setText(newText);
    }
    const convertToLower = () =>{
       let newText = text.toLowerCase();
       setText(newText);
    }
    const separateWithHyphen = () =>{
       let newText = text.replaceAll(" ","-");
       setText(newText);
    }
    const clearText = () =>{
       let newText = "";
       setText(newText);
    }
    return(
<>

<div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
    <h2 className="my-3 text-center" >Text Modifier</h2>
    <div className="my-3">
    <textarea cols="180" rows="20" id="mytextArea" onChange={handleOnChange} value={text}></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={convertToUpper}>Covert To Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={convertToLower}>Covert To Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={separateWithHyphen}>Separate With Hyphen</button>
    <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>

<h2>Text Summary</h2>
<h3>Letter:{text.length}, Words:{!(text.trim())?0:text.split(/\s+/).length}</h3> 
</div>
</>
    );
}

