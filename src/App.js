import "./App.css";
import Greeting from "./components/Greeting";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <Greeting />
      <TodoWrapper />
    </div>
  );
}

export default App;
