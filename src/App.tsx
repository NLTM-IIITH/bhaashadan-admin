import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarx from "./components/Navbarx";
import Analytics from "./pages/Analytics";
import Pages from "./pages/Paragraphs";
import Upload from "./pages/Upload";
import Submissions from "./pages/Submissions";
import Users from "./pages/Users";
import Sidebar from "./components/Sidebar";
import Users1 from "./pages/Users1";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex-grow ml-[15rem]">
            <Navbarx />
            <Routes>
              <Route path="/" element={<Analytics />} />
              <Route path="/paragraphs" element={<Pages />} />
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users1" element={<Users1 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
