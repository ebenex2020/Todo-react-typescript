/** @format */

import { useTodo } from "../context/ContextTodo";

const Search = () => {
  const { todo, setTodo, onAddItems } = useTodo();

  return (
    <form className="search" onSubmit={onAddItems}>
      <input
        type="input"
        placeholder="Enter a list"
        className="search_input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button className="btn">Go</button>
    </form>
  );
};

export default Search;
