import React, { useState } from "react";

const Event = () => {
  const [number, setNumber] = useState(0);
  //   const clickHandler = () => {
  //     // console.log("Click Me Clickhandler1");
  //     alert("Hello, good evening!")
  //   };

  const tambahHandler = () => {
    console.log("Tambah Handler");
    number >= 10 ? alert("Max number 10") : setNumber(number + 1);
  };
  const kurangHandler = () => {
    console.log("Kurang Handler");
    number === 0 ? alert("Min number 0") : setNumber(number - 1);
  };
  return (
    <div>
      {/* <button 
        onClick={clickHandler} 
        className="btn btn-primary btn-sm">
        Click Me
      </button> */}

      <h1>{number}</h1>
      <button onClick={tambahHandler} className="btn btn-success btn-sm">
        + Tambah
      </button>
      <button onClick={kurangHandler} className="btn btn-danger btn-sm">
        - Kurang
      </button>
    </div>
  );
};

export default Event;