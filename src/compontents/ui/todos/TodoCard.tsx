import { ITodo } from "@/interfaces/todolist.interface";
import { format } from 'date-fns'

interface TodoCardProps {
    todo: ITodo;
    onDelete?: (id: string) => void;
    onEdit?: (todo: ITodo) => void;
    onToggleComplete?: (id: string) => void;
}

export const TodoCard = ({ todo, onDelete, onEdit, onToggleComplete }: TodoCardProps) => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-900 transition hover:scale-[1.01] space-y-3">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {todo.title}
                </h2>
                <span
                    className={`text-xs px-2 py-1 rounded-full ${todo.isCompleted ? "bg-green-500 text-white" : "bg-yellow-400 text-black"
                        }`}
                >
                    {todo.isCompleted ? "Done" : "Pending"}
                </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">{todo.text}</p>

            <div className="text-xs text-gray-500 space-y-1">
                <p>Created: {format(new Date(todo.createdAt), "yyyy-MM-dd HH:mm")}</p>
                {todo.endDate && (
                    <p>Deadline: {format(new Date(todo.endDate), "yyyy-MM-dd HH:mm")}</p>
                )}
            </div>

            <div className="flex justify-end gap-2 pt-2">
                <button
                    onClick={() => onToggleComplete?.(todo.id)}
                    className="text-xs px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                >
                    {todo.isCompleted ? "Mark as Undone" : "Mark as Done"}
                </button>
                <button
                    onClick={() => onEdit?.(todo)}
                    className="text-xs px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete?.(todo.id)}
                    className="text-xs px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
