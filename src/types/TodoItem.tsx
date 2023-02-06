import { Todo } from "./Todo";

export interface ITodoItem {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    delateTodo: (id: Todo['id']) => void;
    selectTodoForEdit: (id: Todo['id']) => void;
}