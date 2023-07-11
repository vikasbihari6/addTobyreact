import React from "react";
import { useState } from "react";
import List from "./comonents/list";
const Todo = () => {
  const [list, setList] = useState(["Vikas"]);
  const [str,setStr]=useState("");

  const addTodo = () => {
    setList([...list, str]);
    setStr("")
  };
  const setVal=(event)=>{
    setStr(event.target.value)
  }
  const remove=(uniqeidx)=>{
      const newlist=list.filter((ele,idx)=>{
        return idx!==uniqeidx;
      })
      setList(newlist)
  }
  return (
    <>
      <div className="row">
        <div className="col-4 m-auto">
          <h1>Add Todo</h1>
          <input onChange={setVal} value={str}></input>
          <span className="btn btn-info" onClick={addTodo}>
            +
          </span>
    
              <div>
                {
                  list.map((item,idx)=>{
                    return <div>
                       <List removeitem={remove} listitem={item} uniqueidx={idx}></List>
                    </div>
                  })
                }
              </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
