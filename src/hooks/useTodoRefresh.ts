import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoService } from '@/services/todo.services';
import { ITodoResponse } from '@/interfaces/todolist.interface';

export function useTodoRefresh() {
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: (id: string) => todoService.deleteTodo(id),
        onMutate: async (id: string) => {
            const existingTodo = queryClient.getQueryData<ITodoResponse[]>(['todos']);
            if (existingTodo) {
                queryClient.setQueryData(['todos'], existingTodo.filter(todo => todo.id !== id));
            }
            return { existingTodo };
        },
        onError: (_err, _id, context) => {
            if (context?.existingTodo) {
                queryClient.setQueryData(['todos'], context.existingTodo);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const toggleCompleteMutation = useMutation({
        mutationFn: async (todo: ITodoResponse) => {
            const updated = { ...todo, completed: !todo.isCompleted };
            await todoService.updateTodo(updated);
            return updated;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    return {
        deleteMutation,
        toggleCompleteMutation,
    };
}