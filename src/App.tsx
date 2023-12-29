/** @format */

import Search from "./component/Search";
import Items from "./component/Items";
import { ContextTodoListProvider } from "./context/ContextTodo";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="heading">My Todo-Lists</h1>
      <ContextTodoListProvider>
        <Search />
        <Items />
      </ContextTodoListProvider>
    </div>
  );
};

export default App;
