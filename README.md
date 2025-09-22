# Feedback Collector

A **React app** to collect and manage user feedback.

## Features
- Add new feedback with a rating
- View list of feedback items
- Delete Feedback

## Technologies Used
- React for frontend
- React Router for navigation
- Local Storage for Storing feedbacks
- CSS

## Components Overview

### App.jsx
- Root component
- Renders other components
- Handles state management

### Components/FeedbackForm.jsx
- Form to add feedback
- Inputs: text and rating
- Submit button adds feedback
- Validates input

### Components/FeedbackList.jsx
- Displays list of feedbacks
- Renders **FeedbackItem** for each feedback
- Shows message if no feedback

### Components/FeedbackItem.jsx
- Single feedback display
- Shows text and rating
- Delete button

### Components/ModalComponent.jsx
- Popup/modal for  delete confirmation
- Reusable for multiple actions
### Services/FeedbackServices.js
- Helper file for feedback logic (add, delete)
- Can fetch/save data from localStorage



### CSS files
- App.css / FeedbackForm.css for styling

