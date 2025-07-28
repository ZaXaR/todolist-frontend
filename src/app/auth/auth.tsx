'use client';


import { IAuthForm } from "@/interfaces/auth.interface";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { toast } from "react-hot-toast";
import { Input } from "@/compontents/ui/inputs/Input";
import { Button } from "@/compontents/ui/buttons/Button";

export function Auth() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IAuthForm>({ mode: "onChange" });

    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    const { mutate } = useMutation({
        mutationKey: ["auth"],
        mutationFn: async (data: IAuthForm) =>
            authService.main(isLogin ? "login" : "register", data),
        onSuccess: () => {
            toast.success(isLogin ? "Login successful" : "Registration successful");
            reset();
            push("/dashboard");
        }
    });

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        mutate(data);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md"
            >
                <h2 className="text-center text-2xl font-semibold text-gray-800">
                    {isLogin ? "Sign In" : "Sign Up"}
                </h2>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: "Email is required" })}
                        className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 ${errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                        className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 ${errors.password ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {isLogin ? "Login" : "Register"}
                </button>

                <div className="text-center text-sm text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        {isLogin ? "Sign Up" : "Sign In"}
                    </button>
                </div>
            </form>
        </div>
    );
}
