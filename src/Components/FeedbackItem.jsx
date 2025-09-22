import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import { deleteFeedback } from "../Services/FeedbackServices";

function FeedbackItem({ fb, index, refresh }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteFeedback(index);
    refresh(); // refresh feedback list after deletion beacause here it is 
    // deleted from the local storage not from the screen
    // to remove it from the screen do refresh 
    setShowModal(false);
  };

  return (
    <div style={{ border:" 1px solid red",padding:"20px", marginBottom:"20px", borderRadius:"5px", position:"relative",backgroundColor:"#f8cfd7ff" }}>
      <p><strong>Name:</strong> {fb.name}</p>
      <p><strong>Email:</strong> {fb.email}</p>
      <p><strong>Date:</strong> {fb.date.split("T")[0]}</p>
      <p><strong>About:</strong> {fb.about}</p>
      <p><strong>Feedback:</strong> {fb.message}</p>
      <p><strong>Rating:</strong> {fb.rating}⭐</p>

      <button
        onClick={() => setShowModal(true)}
        style={{ 
           top:"10px", right:"10px",
           backgroundColor:"red", color:"white", 
           border:"none", padding:"5px 10px",
           borderRadius:"5px", cursor:"pointer" }}
      >
        Delete
      </button> 
   
      {showModal && <ModalComponent 
        onConfirm={handleDelete}
        onCancel={() => setShowModal(false)}
      />}
    </div>

    // whenever we click on Delete button it set the showmodal true and modal becomes visible
    // Modal will Show the message that you really want to delete it and two buttons Yes and No 
    // If you click yes it will call the handleDelte function which will call the deleteFeedback
    // from the local storage and pass the index of that particular feedback 
    // or if you click no that will set the show modal false
  );
}

export default FeedbackItem;
