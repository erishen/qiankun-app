import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Router>
          <div>
            <h2>Main App</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/subapp1">Sub App 1</Link>
                </li>
                <li>
                  <Link to="/subapp2">Sub App 2</Link>
                </li>
              </ul>
            </nav>
            <div id="subapp-viewport"></div>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
