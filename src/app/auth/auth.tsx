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


    const { register, handleSubmit, reset, formState: { errors } } = useForm<IAuthForm>({
        mode: "onChange"
    });

    const [isLogin, setIsLogin] = useState(false);

    const { push } = useRouter();

    const { mutate } = useMutation({
        mutationKey: ["login"],
        mutationFn: async (data: IAuthForm) => authService.main(isLogin ? "login" : "register", data),
        onSuccess: () => {
            toast.success(isLogin ? "Login successful" : "Registration successful");
            reset();
            push("/dashboard");


        }
    });

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        mutate(data);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">{isLogin ? "Login" : "Register"}</h2>
                <Input
                    {
                    ...register("email", {
                        required: "Email is required"
                    })
                    }
                    id="email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                />
                <Input
                    id="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    {
                    ...register("password", {
                        required: "Password is required"
                    })
                    }
                />

                <Button onClick={() => setIsLogin(true)}>
                    login
                </Button>
                <Button onClick={() => setIsLogin(false)}>
                    register
                </Button>
            </form>
        </div>
    );
}


