import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login";
import { LogoutButton } from "./components/Logout";
import { Profile } from "./components/Profile";

function App() {
  const isAuthenticated = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editt <code>src/App.js</code> and save to reload.
        </p>
        {isAuthenticated ? (
          <>
            <LoginButton />  <LogoutButton />
            <Profile />
          </>
        ) : (
          <>
           <Profile />
            <LogoutButton />
          </>
        )}
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

export default App;
