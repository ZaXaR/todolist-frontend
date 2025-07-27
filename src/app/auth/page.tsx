import { Metadata } from "next";
import { Auth } from "./auth";

const NO_INDEX_PAGE = {
    robots: "noindex, nofollow"
};

export const metadata: Metadata = {
    title: "Authentication",
    ...NO_INDEX_PAGE
};

export default function AuthPage() {
    return (
        <Auth />
    );
}