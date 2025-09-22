//To store the data so that it cannot vanish when we refresh 
//I have used local storage


//addFeedback function is adding the data to the Local Storage
export const addFeedback = (feedback) => {
  const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
  stored.push(feedback);
  localStorage.setItem("feedbacks", JSON.stringify(stored));
};

//getFeedback function is used to get the feedbacks from the local Storage
export const getFeedbacks = () => {
  return JSON.parse(localStorage.getItem("feedbacks")) || [];
};

//Whenever we delete any feedback it should be removed from the local storage 
export const deleteFeedback = (index) => {
  const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
  stored.splice(index, 1);
  localStorage.setItem("feedbacks", JSON.stringify(stored));
};
  