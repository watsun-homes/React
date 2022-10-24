import {useState} from "react";
import classNames from "classnames";

export const Filter = ({value,onChange}) => {

  const handleClick = (key,e) => {
    onChange(key);
    e.preventDefault();
  };
  
  return(
    <div className="panel-tabs">
    <a
    href="#"
    onClick={handleClick.bind(null,"ALL")}
    className={classNames({"is-active": value === "ALL"})}
    >ALL</a>
    <a
    href="#"
    onClick={handleClick.bind(null,"TODO")}
    className={classNames({"is-active": value === "TODO"})}
    >TODO</a>
    <a
    href="#"
    onClick={handleClick.bind(null,"DONE")}
    className={classNames({"is-active": value === "DONE"})}
    >DONE</a>
    </div>
  );

}
