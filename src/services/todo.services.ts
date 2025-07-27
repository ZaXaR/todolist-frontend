import { ITodo } from "@/interfaces/todolist.interface";

class TodoService {
    private BASE_URL = "/todolist";

    async getTodos(): Promise<ITodo[]> {
        const response = await axiosAuth.get(this.BASE_URL);
        if (!response.data) {
            throw new Error("Failed to fetch todos");
        }
        return response.data;
    }
}