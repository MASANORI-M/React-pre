import React, { useState } from "react";
import ColofulMsg from "./components/ColorfulMsg";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんちは!</h1>
      <ColofulMsg color="blue">Youは元気かい！</ColofulMsg>
      <ColofulMsg color="pink">元気だよん♡</ColofulMsg>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
