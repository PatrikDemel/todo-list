import AddTodo from './components/AddTodo';
import AllTodos from './components/AllTodos';

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <h1 className="font-extrabold text-5xl text-center font-gothic tracking-wide mt-12">
            TodoList uwu
          </h1>
        </header>
        <AddTodo />
        <AllTodos />
      </main>
    </div>
  );
}

export default App;
