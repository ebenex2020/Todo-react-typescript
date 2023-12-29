/** @format */

import { useTodo } from "../context/ContextTodo";

import ItemLists from "./ItemLists";

const Items = () => {
  const { items } = useTodo();
  return (
    <div className="items">
      {items.map((item) => (
        <ItemLists item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Items;
