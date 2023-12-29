/** @format */

import { createContext, useContext, useState } from "react";
import { AllProps, ContextTodo, ItemsProp } from "../Type.type";

const ContextTodoList = createContext({} as AllProps);

const ContextTodoListProvider = ({ children }: ContextTodo) => {
  const [todo, setTodo] = useState<string>("");
  const [items, setItems] = useState<ItemsProp[]>([]);

  function handleAddItems(e: React.FormEvent) {
    e.preventDefault();

    const newItems = {
      id: Date.now(),
      todo,
      isDone: false,
    };
    if (todo) {
      setItems([...items, newItems]);
    }
    setTodo("");
  }

  function handDelete(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleDone(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  return (
    <ContextTodoList.Provider
      value={{
        todo,
        setTodo,
        items,
        setItems,
        onDelete: handDelete,
        onDone: handleDone,
        onAddItems: handleAddItems,
      }}
    >
      {children}
    </ContextTodoList.Provider>
  );
};

const useTodo = () => {
  const context = useContext(ContextTodoList);
  if (context === undefined)
    throw new Error("ContextTodoList is used outside the Component");
  return context;
};

export { ContextTodoListProvider, useTodo };
