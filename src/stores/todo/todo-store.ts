import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface todo {
  id: number;
  name: string;
  type: string;
}
interface ITodo {
  todos: todo[];
  createTodo: () => void;
  removeTodo: () => void;
  updateTodo: () => void;
}


// export const useTodoStore = create<ITodo>()(
//     persist(
        
//     )
// )