import {useState,useEffect} from "react";

export const Example = () => {
  const [time,setTime] = useState(0);
  const [isRunning,setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if(isRunning){
      console.log("start");
      interval = window.setInterval(() => {
        console.log("update");
        setTime(prevState => prevState + 1);
      }, 1000)
    }

    return () => {
      window.clearInterval(interval);
      console.log("end");
    };
  }, [isRunning]);

  const toggle = () => {
    setIsRunning(prevState => !prevState);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  }

  return(
    <>
    <h3>
    <time>{time}</time>
    <span>秒経過</span>
    </h3>
    <div>
    <button onClick={toggle}>{isRunning ? "ストップ" : "スタート"}</button>
    <button onClick={reset}>リセット</button>
    </div>
    </>
  )



}
