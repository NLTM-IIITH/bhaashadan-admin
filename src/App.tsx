import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarx from "./components/Navbarx";
import Analytics from './pages/Analytics';
import Pages from "./pages/Pages";
import Upload from "./pages/Upload";
import Submissions from "./pages/Submissions";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Router>
        <Navbarx />
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/users" element={<Users />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
