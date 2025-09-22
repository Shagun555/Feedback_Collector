import  { useState, useEffect } from "react";
import { getFeedbacks } from "../Services/FeedbackServices";
import FeedbackItem from "./FeedbackItem";
import { useNavigate } from "react-router-dom";//I have used add more feedback button at the last 
//So to navigate to the feedback form directly I have used useNavigate hook here

function FeedbackList() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [keyword, setKeyword] = useState(""); //If you search  using text like name or anything
  const [dateFilter, setDateFilter] = useState(""); //for searching the feedback according to dates

  const refreshList = () => setFeedbacks(getFeedbacks());

  useEffect(() => {
    refreshList();
  }, []); 

  //Logic for filtering feedback accorfing to date or text(like name,email etc)
  const filtered = feedbacks.filter(fb => {
    const matchesKeyword =
      fb.name.toLowerCase().includes(keyword.toLowerCase()) ||
      fb.email.toLowerCase().includes(keyword.toLowerCase()) ||
      fb.message.toLowerCase().includes(keyword.toLowerCase())||
      fb.about.toLowerCase().includes(keyword.toLowerCase());
    const matchesDate = dateFilter ? fb.date.split("T")[0] === dateFilter : true;
    return matchesKeyword && matchesDate;
  });

  return (
    <div>
      <h3>All Feedbacks</h3>
      <div style={{ marginBottom: "15px" }}>
        <label>Search by text </label>
        <input type="text" placeholder="Search keyword..." value={keyword} onChange={(e) => setKeyword(e.target.value)} 
        style={{ marginRight:"10px", padding:"5px" , borderRadius: "6px",border: "1px solid black" }} />
        
        <label>Search by Date </label>
        <input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}
         style={{ padding:"5px",borderRadius: "6px",border: "1px solid black" }}/>
      </div>
      
      {filtered.length === 0 && <p>No feedback found.</p>} 
       
      {filtered.map((fb, index) => (
        <FeedbackItem key={index} fb={fb} index={index} refresh={refreshList}/>
      ))}
       <button type="button" className="submit-btn" onClick={() => navigate("/")}>Add More Feedbacks</button>

    </div>
  );
}

export default FeedbackList;
 
// If Filtered feedback length is zero it will show no feedback found 
// else it will show the matched feedbacks 