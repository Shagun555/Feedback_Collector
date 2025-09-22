import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import "./assets/App.css"; // For styling 

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/"> <span>Feedback</span>Collector</Link>
          <Link to="/list">Feedback List</Link>
        </div>
      </nav>  
      <div className="container">
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/list" element={<FeedbackList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// To create navbar feel i have used nav tag  
// and routers here so that by clicking on Feedback Collector
// or feedback list you can directly navigate to them 