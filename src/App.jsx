import { useState } from "react";
import { ColorMessage } from "./components/ColorMessage";

export const App = () => {
  const [num, setNum] = useState(1);
  const onClickButton = () => {
    setNum(num + 1);
    // setNum(num + 1);
    setNum((prev) => prev + 1);
    console.log(num);
  };

  return (
    <>
      <h1 style={{color: "red"}}>Hello World</h1>
      <p style={{color: "blue"}}>Hello React</p>
      <ColorMessage color="blue" message="GoodBye" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};