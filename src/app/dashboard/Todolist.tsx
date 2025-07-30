'use client'

import { TodoCard } from "@/compontents/ui/todos/TodoCard";
import { todoService } from "@/services/todo.services";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useTodoRefresh } from "@/hooks/useTodoRefresh";
import { ITodoResponse } from "@/interfaces/todolist.interface";

export function Todolist() {
  const queryClient = useQueryClient();
  const {
    data: todolist = [],
    isLoading,
    isError,
  } = useQuery<ITodoResponse[]>({
    queryKey: ['todos'],
    queryFn: () => todoService.getTodosList(),
  });

  const { deleteMutation, toggleCompleteMutation } = useTodoRefresh();

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };
  const handleToogleComplete = (id: string) => {
    const todo = todolist.find(t => t.id === id);
    if (todo) toggleCompleteMutation.mutate(todo);
  };


  return (
    <section className="max-w-xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tasks</h2>

      {isLoading ? (
        <div className="flex items-center justify-center h-32">
          <span className="text-sm text-gray-500 animate-pulse">Loading...</span>
        </div>
      ) : todolist.length === 0 ? (
        <div className="flex items-center justify-center h-32 border rounded-lg bg-gray-50">
          <span className="text-sm text-gray-500">No active task.</span>
        </div>
      ) : (
        <div className="grid gap-4">
          {todolist.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onToggleComplete={handleToogleComplete}
            />
          ))}
        </div>
      )}
    </section>
  );
}
