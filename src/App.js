import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div className="App">
      <h1>List My Work </h1>
      <TodoCard title="Fix Car" />
      <TodoCard title="Send an invoice" />
    </div>
  );
}

export default App;
