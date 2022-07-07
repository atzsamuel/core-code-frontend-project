import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Login/Login";
import Layout from "./components/LayoutComponents/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import BankAccounts from "./components/BankAccounts/BankAccounts";
import RegiterUser from "./components/RegisterUser/RegisterUser";
import Transaction from "./components/Transaction/Transaction";
import Transfer from "./components/Transfer/Transfer";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegiterUser />} />
        {/*<Route path="/" element={<Layout component={Dashboard} />} /> */}
        <Route path="/dashboard" element={<Layout component={Dashboard} />} />
        <Route
          path="/bankaccount"
          element={<Layout component={BankAccounts} />}
        />
        <Route
          path="/transaction"
          element={<Layout component={Transaction} />}
        />
        <Route path="/transfer" element={<Layout component={Transfer} />} />
      </Routes>
    </AuthProvider>
  );
}

/*function App() {

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      console.log("token is present");
    } else {
      console.log("token is not present");
    }
  }, []);
  localStorage.setItem("userToken", "0");
  localStorage.setItem("userId", "0");
  if (
    localStorage.getItem("token") === "0" &&
    localStorage.getItem("userId") === "0"
  ) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegiterUser />} />
      </Routes>
    );
  }
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout component={Dashboard} />} />
        <Route path="/dashboard" element={<Layout component={Dashboard} />} />
        <Route
          path="/bankaccount"
          element={<Layout component={BankAccounts} />}
        />
      </Routes>
    </>
  );
}*/

export default App;
