import { todoService } from "@/services/todo.services";
import { Metadata } from "next"
import { Profile } from "./Profile";
import { Todolist } from "./Todolist";
import { CreateTask } from "./CreateTask";

export default function DashboardPage() {
    const metadata: Metadata = {
        title: "Dashboard",
    }

    // const todolist = todoService.getTodosList();
    // console.log(todolist);

    return (
        <div className="grid grid-cols-3 gap-6 max-w-screen-xl mx-auto px-6 py-10">
            {/* Левая колонка: Профиль */}
            <div className="bg-white rounded-md shadow-md p-4">
                <Profile />
            </div>

            {/* Центральная колонка: Список задач */}
            <div className="bg-white rounded-md shadow-md p-4">
                <Todolist />
            </div>

            {/* Правая колонка: Создание задачи */}
            <div className="bg-white rounded-md shadow-md p-4">
                <CreateTask />
            </div>
        </div>
    );
}