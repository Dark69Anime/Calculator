import './App.css';
import { useState } from 'react';

function App(){

const[Result,setResult] = useState("");

const clicked= (event) =>{
    setResult(Result.concat(event.target.value));
}

const clearDisplay = () =>{
    setResult(" ");
}

const calculate = () =>{
    setResult(eval(Result).toString());
}

    return(
        <>
        <div className="cal">
            <input type="text" placeholder="0" id="ans" value={Result}/>
                <input type="button" value="0" className="button" onClick={clicked}></input>
                <input type="button" value="1" className="button" onClick={clicked}></input>
                <input type="button" value="2" className="button" onClick={clicked}></input>
                <input type="button" value="3" className="button" onClick={clicked}></input>
                <input type="button" value="4" className="button" onClick={clicked}></input>
                <input type="button" value="5" className="button" onClick={clicked}></input>
                <input type="button" value="6" className="button" onClick={clicked}></input>
                <input type="button" value="7" className="button" onClick={clicked}></input>
                <input type="button" value="8" className="button" onClick={clicked}></input>
                <input type="button" value="9" className="button" onClick={clicked}></input>

                <input type="button" value="+" className="button" onClick={clicked}></input>
                <input type="button" value="-" className="button" onClick={clicked}></input>
                <input type="button" value="/" className="button" onClick={clicked}></input>
                <input type="button" value="*" className="button" onClick={clicked}></input>
                <input type="button" value="." className="button" onClick={clicked}></input>

                <input type="button" value="Clear" className="button" onClick={clearDisplay}></input>
                <input type="button" value="=" className="button" onClick={calculate}></input>

        </div>
        
        </>
    );
}

export default App;
