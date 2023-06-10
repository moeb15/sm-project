import LoginForm from "./components/loginform.js";
import CreateAccountForm from "./components/createaccount.js";
import HomePage from "./components/homepage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./components/authcontext.js";

function App() {
  return (
    <div className="page">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/create_account" element={<CreateAccountForm/>}/>
            <Route path="/homepage" element={<HomePage/>}/>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
