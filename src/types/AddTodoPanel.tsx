import { Todo } from "./Todo";

export interface IAddTodoPanel {
    mode: 'add';
    addTodo: ({ title, description }: Omit<Todo, 'checked' | 'id'>) => void;
    className?: string
}