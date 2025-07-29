import { TCreateTodo } from "@/interfaces/todolist.interface";
import { todoService } from "@/services/todo.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodo() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (payload: TCreateTodo) => todoService.createTodo(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    return {
        create: mutation.mutateAsync,
        isLoading: mutation.isPending,
        isError: mutation.isError,
    };
}
