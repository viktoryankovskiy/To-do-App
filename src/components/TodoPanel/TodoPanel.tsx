
import React, { ChangeEvent } from "react";
import cn from "classnames";
import Input from "../Input/Input";

import styles from './TodoPanel.module.scss'
import Button from "../Button/Button";
import { ITodoPanel } from "../../types/TodoPanel";


const lIST_ITEM = {
    title: '',
    description: ''
}

const TodoPanel = (props: ITodoPanel): JSX.Element => {
    const isEdit = props.mode === 'edit';

    const [todo, setTodo] = React.useState(isEdit ? props.editTodo : lIST_ITEM);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value })
    }

    const onClick = () => {
        const todoItem = { title: todo.title, description: todo.description }

        if (isEdit) {
            return props.changeTodo(todoItem)
        }
        props.addTodo(todoItem);
        setTodo(lIST_ITEM);
    }

    const onCancel = () => {
        if (isEdit) {
            const caruVal = { title: props.editTodo.title, description: props.editTodo.description }
            return props.changeTodo(caruVal)
        }
    }

    return (
        <div className={cn(styles.navigation, props.className)}>
            <div className={styles.wrapper}>
                <Input className={cn(styles.input, 'name')} name='title' type="text" placeholder="Task title" value={todo.title} onChange={onChange} />
                <Input className={cn(styles.input, 'description')} name='description' type="text" placeholder="Task description" value={todo.description} onChange={onChange} />
                <div className={styles.button}>
                    {isEdit
                        ?
                        <>
                            <Button appearance="yellow" onClick={onClick}>
                                Edit
                            </Button>
                            <Button appearance="red" onClick={onCancel}>
                                Cancel
                            </Button>
                        </>
                        :
                        <Button appearance="blue" onClick={onClick}>
                            Add
                        </Button>
                    }
                </div>
            </div>
        </div>
    )

}

export default TodoPanel;