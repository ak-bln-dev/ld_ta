import logo from './logo.svg';
// import of the alternative logo
import altLogo from './react-icons.svg';
import './App.css';
// import of the Launch Darkly react client side SDK into the application
import  { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  // definition of the variable to initiate the Feature Flag Functionality by introducing useFlags()
  const { imageSwitch } = useFlags()
  return (
    <div className="App">
      // using a feature flag (imageSwitch) to control the shown image of the application
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
  // please provide your clientSideID out of LaunchDarkly
  clientSideID: '***',
  options: {
    bootstrap: 'localstorage'
  },
})(App);
