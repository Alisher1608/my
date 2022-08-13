import React, { useState} from "react";
import "./Kalkulator.css";
function Kalkulator() {
  const [son, setSon] = useState("");


  const tengBtn = () => {
    setSon(eval(son));
  };
  return (
    <div className="kalkulator">
      <input type="text" value={son} />
      <div className="btnCard">
        <button style={{backgroundColor:"gold"}} onClick={() => setSon(son.substr(0, son.length - 1))}>
          Clear
        </button>
        <button style={{backgroundColor:"red"}} onClick={() => setSon("")}>AC</button>
        <button className="amal">%</button>
        <button className="amal" onClick={(e) => setSon(son + e.target.value)} value="/">
          /
        </button>
      </div>
      <div className="btnCard">
        <button onClick={() => setSon(son + "7")}>7</button>
        <button onClick={() => setSon(son + "8")}>8</button>
        <button onClick={() => setSon(son + "9")}>9</button>
        <button className="amal" onClick={(e) => setSon(son + e.target.value)} value="*">
          *
        </button>
      </div>
      <div className="btnCard">
        <button onClick={() => setSon(son + "4")}>4</button>
        <button onClick={() => setSon(son + "5")}>5</button>
        <button onClick={() => setSon(son + "6")}>6</button>
        <button className="amal" onClick={(e) => setSon(son + e.target.value)} value="+">
          +
        </button>
      </div>
      <div className="btnCard">
        <button onClick={() => setSon(son + "1")}>1</button>
        <button onClick={() => setSon(son + "2")}>2</button>
        <button onClick={() => setSon(son + "3")}>3</button>
        <button className="amal" onClick={(e) => setSon(son + e.target.value)} value="-">
          -
        </button>
      </div>
      <div className="btnCard">
        <button onClick={() => setSon(son + "0")}>0</button>
        <button onClick={(e) => setSon(son + e.target.value)} value=".">
          .
        </button>
        <button style= {{backgroundColor:"rgb(10, 145, 208)"}} className="teng" onClick={tengBtn}>=</button>
      </div>
    </div>
  );
}

export default Kalkulator;
