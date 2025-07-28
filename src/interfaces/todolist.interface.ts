export interface ITodo {
    id: string;
    title: string;
    text: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    endDate?: Date;
}

export type TCreateTodo = {
  title: string;
  text: string;
  endDate?: string;
};
