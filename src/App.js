import { StoreProvider, createStore } from "easy-peasy";
import model from "./model";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";

const store = createStore(model);

function App() {
  console.log(store);
  return (
    <StoreProvider store={store}>
      <div className="container">
        <Todos />
        <AddTodo />
      </div>
    </StoreProvider>
  );
}

export default App;
