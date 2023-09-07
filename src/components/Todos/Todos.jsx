import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  removeTodo,
} from "../../store/actions/todoActions";

const AddTodo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputData.trim() !== "") {
      dispatch(addTodo(inputData));
      setInputData("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const removeAllTodo = () => {
    dispatch(removeTodo());
  };

  return (
    <>
      <h1 className="h1-todo">Todo App</h1>
      <div className="todo-first">
        <div>
          <input
            style={{
              width: "370px",
              height: "25px",
              alignItems: "center",
              marginRight: "25px",
            }}
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div>
          <button className="btn-add" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>

      <div className="todo-first">
        {list.map((value) => (
          <div key={value.id}>
            <h3
              style={{
                marginRight: "25px",
              }}
            >
              {value.data}
            </h3>
            <button
              className="btn-add"
              onClick={() => handleDeleteTodo(value.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div>
        <button className="btn-add" onClick={() => removeAllTodo()}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default AddTodo;
