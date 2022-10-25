//Todo>input/todoitem/filter
import {useState} from "react";
import {TodoItemSample} from "./TodoItemSample";
import {Input} from "./TodoInputSample";
import {Filter} from "./TodoFilterSample";

export const Todosample = () => {

  const getKey = () => Math.random().toString(32).substring(2);
  
  const [items,setItems] = useState([
    { key: getKey(), text: 'タスク1', done: false },
    { key: getKey(), text: 'タスク2', done: false },
    { key: getKey(), text: 'タスク3', done: false },
  ]);

  const handleCheck = checked => {//trueとfalseを反転させる関数
    const newItems = items.map(item => {
      if(item.key === checked.key){
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  const handleAdd = text => {//配列を新しく追加する関数
    setItems([...items,{key:getKey(),text,done:false}]);
  };

  const [filter,setFilter] = useState("ALL");

  const handleFilterChange = value => setFilter(value);

  const displayItems = items.filter(item => {
    if(filter === "ALL")return true; //全て表示
    if(filter === "TODO")return !item.done; //item.done=falseのものだけを表示
    //チェックされていないものはitem.done=falseなので
    //filter=TODOの時はitem.doneを反転させてtrueのものを表示
    //チェックされていないもの＝item.done=falseを反転=>true
    //チェックされているもの＝item.done=trueを反転=>false
    if(filter === "DONE")return item.done; //item.done=trueのものだけを表示
    //チェックされているものはitem.done=trueなので
    //filter=DONEの時はチェックされているもの(＝true)のものだけ表示
  });


  const itemDelete = (index) => {//削除ボタンを押して要素を削除
      const deletedTodoList = [...items];
      deletedTodoList.splice(index, 1);
      setItems(deletedTodoList);
  };



  return(
    <div className="todobox">
    <div className="title">TODOBOX</div>

    <Input onAdd={handleAdd} />
    <Filter value={filter} onChange={handleFilterChange} />

    {displayItems.map((item,index,list) => (
      <TodoItemSample
      key={item.key}
      item={item}
      list={list}
      index={index}
      onCheck={handleCheck}
      onBtn={itemDelete}
      />
    ))}


    <div className="length">{displayItems.length} 個のタスク</div>

    </div>
  );


}
