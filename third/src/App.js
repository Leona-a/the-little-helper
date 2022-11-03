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

          <tr className="App-text">
              <td className="border">Review algorithms and data structure</td>
              <td> <button className="App-button">Done</button>
                  <button className="App-button2">Delete</button></td>
              <td className="border"><del>Solve calculus 2 textbook example</del></td>
              <td><button className="App-button">Restore</button>
                  <button className="App-button2">Delete</button></td>
          </tr>
          <p className="App-text2" >

              Enter new list item title :<input type="text" className="input" />
              <button className="App-button3">Create</button>
          </p>
      </div>
  );
}

export default App;
