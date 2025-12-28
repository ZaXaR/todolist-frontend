'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ITodoResponse } from '@/interfaces/todolist.interface';
import { format } from 'date-fns';
import { Input } from '../ui/inputs/Input';
import { Button } from '../ui/buttons/Button';

interface IEditTodoModalProps {
    todo: ITodoResponse;
    isOpen: boolean;
    onClose: () => void;
    onSave: (updated: ITodoResponse) => void;
}

export const EditTodoModal = ({
    todo,
    isOpen,
    onClose,
    onSave,
}: IEditTodoModalProps): React.ReactElement | null => {
    const [title, setTitle] = useState<string>(todo.title);
    const [text, setText] = useState<string>(todo.text);
    const [endDate, setEndDate] = useState<string>(
        todo.endDate ? format(new Date(todo.endDate), "yyyy-MM-dd'T'HH:mm") : ''
    );

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/30 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md space-y-4 border border-gray-200 dark:border-gray-700"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Edit</h2>

                <Input
                    id="title"
                    name="title"
                    label="Title"
                    value={title}
                    placeholder="Please edit title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Input
                    id="text"
                    name="text"
                    label="Description"
                    value={text}
                    placeholder="Please edit text"
                    onChange={(e) => setText(e.target.value)}
                />

                <Input
                    id="endDate"
                    name="endDate"
                    label="Please enter end date"
                    type="datetime-local"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />

                <div className="flex justify-end gap-3 pt-2">
                    <Button onClick={onClose} className="bg-gray-300 text-black hover:bg-gray-400 dark:bg-gray-600 dark:text-white">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            onSave({
                                ...todo,
                                title,
                                text,
                                endDate: endDate ? new Date(endDate) : undefined,
                            });
                            onClose();
                        }}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
};