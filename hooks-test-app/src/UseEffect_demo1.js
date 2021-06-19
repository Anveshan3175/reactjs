import React, { useEffect, useState } from "react";

let born = false;

function UseEffect_demo1() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect(() => {
    if (born) {
      document.title = "Nirvana attained";
    }
  }, [nirvana]);

  // Runs on only mounting
  useEffect(() => {
    console.log("I am born");
  }, []);

  // Runs on mounting and update
  useEffect(() => {
    if (born) {
      console.log("Make mistake and grow");
    } else {
      born = true;
    }

    if (growth > 70) {
      setNirvana(true);
    }

    return function (){
        console.log('Clean up after mistakes');
    }
  });

  function onClickHandler() {
    setGrowth(growth + 10);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use effect Demo</h1>
      <h3>Growth : {growth}</h3>
      <button onClick={onClickHandler}>learn and grow</button>
    </div>
  );
}

export default UseEffect_demo1;
