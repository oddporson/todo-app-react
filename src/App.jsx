import "./App.css";

// components
import NavBar from "./components/NavBar";
import TodoCard from "./components/TodoCard";

const App = () => {
  return (
    <main>
      <div className="NavBar">
        <NavBar />
      </div>
      <TodoCard />
      {/* <div className="App">
        <h2>hello world</h2>
        <p>Welcome to my Todo App</p>
      </div> */}
    </main>
  );
};

export default App;
