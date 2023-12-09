import logo from './logo.svg';
import altLogo from './react-icons.svg';
import './App.css';
import  { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { imageSwitch } = useFlags()
  return (
    <div className="App">
      <header className="App-header">
        { imageSwitch ? (<img src={altLogo} className="App-logo" alt="logo" />) : (
        <img src={logo} className="App-logo" alt="logo" />)
        }
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
        </a>
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: '6574590d0fa1c70fd60c2274',
  options: {
    bootstrap: 'localstorage'
  },
})(App);
