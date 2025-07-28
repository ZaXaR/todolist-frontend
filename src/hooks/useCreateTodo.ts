import { useState } from "react";
import { toast } from "react-hot-toast";
import { TCreateTodo } from "@/interfaces/todolist.interface";
import { todoService } from "@/services/todo.services";
import { errorCatch } from "@/utils/error";

export function useCreateTodo() {
    const [isLoading, setIsLoading] = useState(false);

    const create = async (payload: TCreateTodo) => {
        setIsLoading(true);
        try {
            const created = await todoService.createTodo(payload);
            toast.success("Task Created");
            return created;
        } catch (err) {
            toast.error(errorCatch(err));
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return { create, isLoading };
}