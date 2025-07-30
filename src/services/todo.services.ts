import { axiosAuth } from "@/api/interceptor";
import { ITodo, TCreateTodo } from "@/interfaces/todolist.interface";

class TodoService {
    private BASE_URL = "/todolist";

    async getTodosList(): Promise<ITodo[]> {
        const response = await axiosAuth.get(this.BASE_URL);
        if (!response.data) {
            throw new Error("Failed to get todos");
        }
        return response.data;
    }

    async createTodo(data: TCreateTodo): Promise<ITodo> {
        const response = await axiosAuth.post(this.BASE_URL, data);
        if (!response.data) {
            throw new Error("Failed to create todo");
        }
        return response.data;
    }


    async updateTodo(todo: ITodo): Promise<ITodo> {
        const response = await axiosAuth.put(`${this.BASE_URL}/${todo.id}`, todo);
        if (!response.data) {
            throw new Error("Failed to update todo");
        }
        return response.data;
    }

    async deleteTodo(id: string): Promise<void> {
        const response = await axiosAuth.delete(`${this.BASE_URL}/${id}`);
        if (response.status !== 204) {
            throw new Error("Failed to delete todo");
        }
    }
}

export const todoService = new TodoService();
export default todoService;