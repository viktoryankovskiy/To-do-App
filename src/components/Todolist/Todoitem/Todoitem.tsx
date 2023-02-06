import React from "react";

import styles from './Todoitem.module.scss';

import Paragraph from "../../Paragraph/Paragraph";
import HTag from "../../HTag/HTag";
import Button from "../../Button/Button";
import { ITodoItem } from "../../../types/TodoItem";
import cn from "classnames";

const Todoitem = ({ todo, checkTodo, delateTodo, selectTodoForEdit }: ITodoItem): JSX.Element => {
    return (
        <div className={cn(styles.item, {
            [styles.done]: todo.checked === true
        })}>
            {todo.title && (
                <HTag className={styles.title} tag={'h3'} onClick={() => checkTodo(todo.id)}>
                    {todo.title}
                </HTag>
            )
            }
            {
                todo.description && (
                    <Paragraph className={styles.p}>
                        {todo.description}
                    </Paragraph>
                )
            }
            <div className={styles.buttons}>
                <Button appearance="yellow" onClick={() => selectTodoForEdit(todo.id)}>
                    Edit
                </Button>
                <Button appearance="red" onClick={() => delateTodo(todo.id)}>
                    Delete
                </Button>
            </div>
        </div >
    )
}

export default Todoitem;