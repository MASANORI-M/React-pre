import React, { useEffect, useState } from "react";
import ColofulMsg from "./components/ColorfulMsg";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShow, setFace] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickShow = () => {
    setFace(!faceShow);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShow || setFace(true);
    } else {
      faceShow && setFace(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんちは!</h1>
      <ColofulMsg color="blue">Youは元気かい！</ColofulMsg>
      <ColofulMsg color="pink">元気だよん♡</ColofulMsg>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickShow}>on/off</button>
      <p>{num}</p>
      {faceShow && <p>(ﾟДﾟ)ﾉ</p>}
    </>
  );
};

export default App;
