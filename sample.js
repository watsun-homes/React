import {useState,useEffect} from "react";

export const Props = (props) => {
  const text = "おお";
  return(
    <>
    <p>{text}</p>
    <h2>{props.mess}</h2>
    </>
  )
}

export const Click = () =>{

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("カウントした");
  },[count])

    return(
      <>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+クリック</button>
      <button onClick={() => setCount(count - 1)}>-クリック</button>
      </>
    );
}

export const PreClick = () => {
  const [cli,precli] = useState(0);
  const countUp = () => {
    precli(prevState => prevState + 1)
  }
  const countDown = () => {
    precli(prevState => prevState - 1)
  }

  useEffect(() => {
    console.log("Current count is...", cli)
  },[cli])

  return(
    <>
    <p>現在のカウント{cli}</p>
    <button onClick={countUp}>＋</button>
    <button onClick={countDown}>-</button>
    </>
  );
}

export const ToggleButton = () => {
  const [open,setOpen] = useState(false);
  const toggle = () => {
    setOpen(prevState => !prevState)
  }
  useEffect(() => {
    console.log("現在は", open)
  },[open])
  return(
    <button onClick={toggle}>
    {open ? "OPEN": "CLOSE"}
    </button>
  );
  //{値 ? tureの場合の表示:falseの場合の表示}三項演算子
}
