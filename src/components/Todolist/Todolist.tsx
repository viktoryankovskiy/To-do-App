import React from "react";

import styles from './Todolist.module.scss';

import Todoitem from "./Todoitem/Todoitem";
import { ITodoList } from "../../types/TodoList";
import TodoPanel from "../TodoPanel/TodoPanel";

const Todolist = ({ todos, checkTodo, delateTodo, selectTodoForEdit, todoIdForEdit, changeTodo }: ITodoList): JSX.Element => {
    return (
        <div className={styles.list}>
            {todos.map((todo) => {
                if (todo.id === todoIdForEdit)
                    return (
                        <TodoPanel
                            mode="edit"
                            key={todo.id}
                            changeTodo={changeTodo}
                            editTodo={{ title: todo.title, description: todo.description }} />
                    )
                return (
                    <Todoitem
                        key={todo.id}
                        todo={todo}
                        checkTodo={checkTodo}
                        delateTodo={delateTodo}
                        selectTodoForEdit={selectTodoForEdit}
                    />
                );

            })}
        </div>
    )
}

export default Todolist;