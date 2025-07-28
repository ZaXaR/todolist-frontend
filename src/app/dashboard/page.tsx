import { Metadata } from "next"
import { Profile } from "./Profile";
import { Todolist } from "./Todolist";
import { CreateTask } from "./CreateTask";

const NO_INDEX_PAGE = {
    robots: "noindex, nofollow"
};

export const metadata: Metadata = {
    title: "Dashboard",
    ...NO_INDEX_PAGE
};

export default function DashboardPage() {

    return (
        <div className="grid grid-cols-3 gap-6 max-w-screen-xl mx-auto px-6 py-10">
            <div className="bg-white rounded-md shadow-md p-4">
                <Profile />
            </div>

            <div className="bg-white rounded-md shadow-md p-4">
                <Todolist />
            </div>

            <div className="bg-white rounded-md shadow-md p-4">
                <CreateTask />
            </div>
        </div>
    );
} 