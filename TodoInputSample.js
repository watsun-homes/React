import {useState} from "react";


export const Input = ({onAdd}) => {

  const [txt,setText] = useState("");
  const handleChange = e => setText(e.target.value);

  const handleKeyDown = e => {
    if(e.key === "Enter"){
      onAdd(txt);
      setText("");
    }
  }

  return(
    <div className="">
    <input type="text"
    placeholder="テキストを入力"
    value={txt}
    onChange={handleChange}
    onKeyPress={handleKeyDown}
    />
    </div>
  );

}
