/** @format */
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdOutlineDoneAll } from "react-icons/md";
import { ItemListProps } from "../Type.type";
import { useEffect, useRef, useState } from "react";
import { useTodo } from "../context/ContextTodo";

function ItemLists({ item }: ItemListProps) {
  const { setItems, items, onDelete, onDone } = useTodo();

  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(item.todo);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  function handleSubmit(e: React.FormEvent, id: number) {
    e.preventDefault();

    setItems(
      items.map((item) => (item.id === id ? { ...item, todo: editTodo } : item))
    );
    setEdit(false);
  }

  function handleEdit() {
    if (!edit && !item.isDone) setEdit(!edit);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, item.id)} className="items-list">
      {edit ? (
        <input
          className="edit-input"
          ref={inputRef}
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        <p style={item.isDone ? { textDecoration: "line-through" } : {}}>
          {item.todo}
        </p>
      )}

      <div className="items-icons">
        <span className="items-icon" onClick={handleEdit}>
          <CiEdit />
        </span>
        <span className="items-icon" onClick={() => onDelete(item.id)}>
          <MdDelete />
        </span>
        <span className="items-icon" onClick={() => onDone(item.id)}>
          <MdOutlineDoneAll />
        </span>
      </div>
    </form>
  );
}

export default ItemLists;
