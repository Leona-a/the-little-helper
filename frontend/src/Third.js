import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <div className="App">
          <div className="App-list">
              <a href="./pages/Lists"><td>List</td>
              </a>
              <a href="./pages/Welcome"><td>Home</td>
              </a>
          </div>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Manage List:My midterms study list
              </p>
          </header>

          <div className="App-text">
               Review algorithms and data structure
              <button className="App-button">Done</button>
              <button className="App-button">Delete</button>
              <del>Solve calculus 2 textbook example</del>
              <button className="App-button">Restore</button>
              <button className="App-button">Delete</button>
          </div>
          <tr className="App-text">
          <input type="text" />
              Enter new list item title
              <button type="submit" className="App-button">Create</button>
          </tr>
      </div>
  );
}

export default App;
