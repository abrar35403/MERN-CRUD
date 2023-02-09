import logo from "./logo.svg";
import "./App.css";
import AddUser from "./Components/AddUser";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<AddUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
