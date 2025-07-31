'use client'

import { TodoCard } from '@/compontents/ui/todos/TodoCard'
import { todoService } from '@/services/todo.services'
import { useQuery } from '@tanstack/react-query'
import { useTodoRefresh } from '@/hooks/useTodoRefresh'
import { ITodoResponse } from '@/interfaces/todolist.interface'
import { useCallback, useState } from 'react'
import { EditTodoModal } from '@/compontents/modal/EditTodoModal'

export function Todolist() {
  const [editingTodo, setEditingTodo] = useState<ITodoResponse | null>(null)
  const { deleteMutation, toggleCompleteMutation, editMutation } = useTodoRefresh()

  const { data: todolist = [], isLoading } = useQuery<ITodoResponse[]>({
    queryKey: ['todos'],
    queryFn: () => todoService.getTodosList(),
  })

  const handleEdit = useCallback((todo: ITodoResponse) => {
    setEditingTodo(todo)
  }, [])

  const handleSave = useCallback(
    (updated: ITodoResponse) => {
      editMutation.mutate(updated, {
        onSuccess: () => setEditingTodo(null),
      })
    },
    [editMutation],
  )

  const handleDelete = useCallback(
    (id: string) => {
      deleteMutation.mutate(id)
    },
    [deleteMutation],
  )

  const handleToogleComplete = useCallback(
    (id: string) => {
      const todo = todolist.find((t) => t.id === id)
      if (todo) toggleCompleteMutation.mutate(todo)
    },
    [todolist, toggleCompleteMutation],
  )

  return (
    <section>
      <h2 className='text-2xl font-bold mb-6 text-[hsl(var(--foreground))] text-center'>Tasks</h2>

      {isLoading ? (
        <div className='flex items-center justify-center h-32'>
          <span className='text-sm text-gray-500 animate-pulse'>Loading...</span>
        </div>
      ) : todolist.length === 0 ? (
        <div className='flex items-center justify-center h-32 rounded-lg bg-white/60 border border-white/30 backdrop-blur-sm'>
          <span className='text-sm text-gray-500'>No active task.</span>
        </div>
      ) : (
        <div className='grid gap-4'>
          {todolist.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onToggleComplete={handleToogleComplete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      {editingTodo && (
        <EditTodoModal
          todo={editingTodo}
          isOpen={true}
          onClose={() => setEditingTodo(null)}
          onSave={handleSave}
        />
      )}
    </section>
  )
}
