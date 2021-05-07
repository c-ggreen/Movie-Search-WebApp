import './App.css';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      {/* a searchbar */}
      {/* new div that generates when user searches for things */}

      <div className="container">
        <h1 className="title">React Movie Search</h1>
      </div>
      
      <Search/>

    </div>
  );
}

export default App;
