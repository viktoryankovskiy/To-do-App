import React from 'react';
import Header from './components/Header/Header';
import HTag from './components/HTag/HTag';
import TodoPanel from './components/TodoPanel/TodoPanel';
import Todolist from './components/Todolist/Todolist';
import { Todo } from './types/Todo';


function App() {

    const STATE = [
        { id: 1, title: 'task 1', description: 'description 1', checked: false },
        { id: 2, title: 'task 2', description: 'description 2', checked: true },
    ]

    const [todos, setTodos] = React.useState(STATE);

    const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo['id'] | null>(null);

    const selectTodoForEdit = (id: Todo['id']) => {
        setTodoIdForEdit(id);
    }

    const addTodo = ({ title, description }: Omit<Todo, 'checked' | 'id'>) => {
        const todosItems = todos.length ? [{ id: todos[todos.length - 1].id + 1, description, title, checked: false }, ...todos] : [{ id: 1, description, title, checked: false }]
        setTodos(todosItems)
    }

    const checkTodo = (id: Todo['id']) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked }
            }
            return todo;
        }))
    }

    const delateTodo = (id: Todo['id']) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const changeTodo = ({ title, description }: Omit<Todo, 'checked' | 'id'>) => {
        setTodos(todos.map((todo) => {
            if (todo.id === todoIdForEdit) {
                return { ...todo, title, description }
            }
            return todo;
        }))
        setTodoIdForEdit(null)
    }

    return (
        <div className="to-do-app">
            <HTag tag={'h1'}>
                To do App
            </HTag>
            <Header counter={todos.length} />
            <div className="heading">
                <HTag tag={'h2'}>
                    Add new task
                </HTag>
                <TodoPanel mode='add' className="panel" addTodo={addTodo} />
            </div>
            <Todolist
                todos={todos}
                todoIdForEdit={todoIdForEdit}
                checkTodo={checkTodo}
                delateTodo={delateTodo}
                changeTodo={changeTodo}
                selectTodoForEdit={selectTodoForEdit}
            />
        </div>
    );
}

export default App;
