import { Todo } from "./Todo";

export interface ITodoList {
    todos: Todo[];
    checkTodo: (id: Todo['id']) => void;
    delateTodo: (id: Todo['id']) => void;
    selectTodoForEdit: (id: Todo['id']) => void;
    changeTodo: ({ title, description }: Omit<Todo, 'checked' | 'id'>) => void;
    todoIdForEdit: Todo['id'] | null;
}