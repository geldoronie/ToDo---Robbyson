
import './App.css';
import Search from './components/search';
import './components/task';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        
        <p>
          Tasks
        </p>
        <Search></Search>

        <input className="formTodo">
        </input>
      </header>
    </div>
  );
}

export default App;
