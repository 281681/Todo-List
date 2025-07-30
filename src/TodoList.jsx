import  "./TodoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("");//taki placeholder se value gayab ho jaye
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodoValue = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((prevTodo) => prevTodo.id != id)
        );
    }

    let MarkAsDoneAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo, isDone:true,

                };

            })
        );
    }

    let MarkAsDone  = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                     isDone:true,
                }
            } else {
                return todo;
            };

        }))
    };

    return (
        <div>
            <input placeholder="enter task"
                value={newTodo}
                onChange={updateTodoValue}
            ></input>
            <br />
            <button onClick={addNewTask}>add task</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr />
            <h1>Task Todo</h1>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                                {todo.task}
                            </span>
                            <button onClick={() => deleteTodoValue(todo.id)}> Delete</button>
                            <button onClick={() => MarkAsDone(todo.id)}>Mark As Done </button>
                        </li>
                    ))

                }
            </ul>
            <button onClick= { MarkAsDoneAll}>MarkAsDoneAll </button>
        </div>
    );
}