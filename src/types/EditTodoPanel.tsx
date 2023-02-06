import { Todo } from "./Todo";

export interface IEditodoPanel {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>
    changeTodo: ({ title, description }: Omit<Todo, 'checked' | 'id'>) => void;
    className?: string
}