import { ITodo } from "@/interfaces/todolist.interface";

interface TodoCardProps {
    todo: ITodo
}

export const TodoCard = ({ todo }: TodoCardProps) => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-900 transition hover:scale-[1.01]">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {todo.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {todo.text}
            </p>
        </div>
    )
}