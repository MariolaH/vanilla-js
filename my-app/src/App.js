import logo from './logo.svg';
import './App.css';
import Button from './button';

function App() {
  let name = 'Cat';
  return (
    <div className="App">
      <Button />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {name}
        </a>
      </header>
    </div>
  );
}

export default App;
