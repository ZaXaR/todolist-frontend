'use client'

import { IAuthForm } from '@/interfaces/auth.interface'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { toast } from 'react-hot-toast'
import { Input } from '@/compontents/ui/inputs/Input'
import { Button } from '@/compontents/ui/buttons/Button'

export function Auth() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IAuthForm>({ mode: 'onChange' })

  const [isLogin, setIsLogin] = useState(false)
  const { push } = useRouter()

  const { mutate, isPending } = useMutation({
    mutationKey: ['auth', isLogin],
    mutationFn: async (data: IAuthForm) =>
      authService.main(isLogin ? 'login' : 'register', data),
    onSuccess: () => {
      toast.success(isLogin ? 'Login successful' : 'Registration successful')
      reset()
      push('/dashboard')
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Something went wrong')
    }
  })

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 p-8 rounded-xl bg-white/80 shadow-lg backdrop-blur-md"
      >
        <h2 className="text-center text-2xl font-bold text-[hsl(var(--foreground))]">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h2>

        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          state={errors.email ? 'error' : 'default'}
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          state={errors.password ? 'error' : 'default'}
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}

        <Button type="submit" className="w-full font-medium" disabled={isPending}>
          {isPending ? 'Loading...' : isLogin ? 'Login' : 'Register'}
        </Button>

        <div className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </form>
    </div>
  )
}