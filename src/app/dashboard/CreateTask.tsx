'use client';

import { useCreateTodo } from "@/hooks/useCreateTodo";
import { Input } from "@/compontents/ui/inputs/Input";
import { Button } from "@/compontents/ui/buttons/Button";
import { useRef } from "react";

export function CreateTask() {
  const formRef = useRef<HTMLFormElement>(null);
  const { create, isLoading } = useCreateTodo();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const payload = {
      title: formData.get("title") as string,
      text: formData.get("text") as string,
      endDate: formData.get("endDate") as string,
    };

    const created = await create(payload);
    if (created) {
      formRef.current.reset();
    };
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Create Task</h2>

      <Input
        id="title"
        name="title"
        label="Title"
        placeholder="Please enter title"
        type="text"
        state="default"
      />

      <Input
        id="text"
        name="text"
        label="Description"
        placeholder="Please enter text"
        type="text"
        state="default"
      />

      <Input
        id="endDate"
        name="endDate"
        label="Date End"
        type="date"
        state="default"
      />

      <Button type="submit" className="mt-4 w-full" disabled={isLoading}>
        {isLoading ? "Created..." : "Create"}
      </Button>
    </form>
  );
}