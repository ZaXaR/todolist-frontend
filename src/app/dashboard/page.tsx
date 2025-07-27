import { todoService } from "@/services/todo.services";
import { Metadata } from "next"

export default function DashboardPage() {
    const metadata: Metadata = {
        title: "Dashboard",
    }

    const todolist = todoService.getTodosList();
    console.log(todolist);

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Add your dashboard content here */}
        </div>
    );
}