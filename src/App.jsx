import React from "react";
import ColofulMsg from "./components/ColorfulMsg";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんちは!</h1>
      <ColofulMsg color="blue">Youは元気かい！</ColofulMsg>
      <ColofulMsg color="pink">元気だよん♡</ColofulMsg>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
