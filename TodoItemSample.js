import {useState} from "react";

export const TodoItemSample = ({item,index,list,onCheck,onBtn}) => {

  const handleChange = () => {
    onCheck(item);
  };

  const itemDeleteChange = () => {
      onBtn(index);
  };


  return(
    <label>

    <input type="checkbox" checked={item.done} onChange={handleChange}/>

    <span className={item.done ? "red" :""}>
    {item.text}
    </span>

    <button onClick={itemDeleteChange}>削除</button>

    </label>
  );

};
