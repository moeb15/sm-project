import LoginForm from "./components/loginform.js";
import CreateAccountForm from "./components/createaccount.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/create_account" element={<CreateAccountForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
