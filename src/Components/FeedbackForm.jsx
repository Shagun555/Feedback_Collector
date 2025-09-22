import { useFormik } from "formik";
import * as Yup from "yup";
import { addFeedback } from "../Services/FeedbackServices";
import { useNavigate } from "react-router-dom";   // importing navigation hook so that we can easily navigete
import "../assets/FeedbackForm.css";

function FeedbackForm() {
  const navigate = useNavigate();
//I have used formik and yup for the validations of name,email,about and feedback inputs
  const formik = useFormik({
    initialValues: { 
      name:"", 
      email:"",
      about:"",
      message:"",
      rating:"" 
    },
    //Validations
    validationSchema:Yup.object({
      name: Yup.string().required("Please Enter name").min(4).max(20),
      email: Yup.string().required("Please Enter email").email("Invalid email"),
      about:Yup.string().required("Please Enter subject of your feedback").min(5).max(50),
      message: Yup.string().required("Please Enter feedback").min(10).max(200),
      rating:Yup.number().required("Please Enter rating").min(0).max(5),
    }),
    onSubmit: (values, { resetForm }) => {
      addFeedback({ ...values, date: new Date().toISOString() }); // feedback along with date so that we can apply date filter
      resetForm(); // to make the input fields empty again
      alert(" Your Feedback submitted!😊");// to show that form is submitted successfully
    }
  });

  return (
    <div style={{
      width:"500px",
      marginLeft:"350px",
      padding:"30px 40px 40px 40px ",
      borderRadius:"7px",
      backgroundColor:" #f4bfc8ff"
    }}>
      <h2>Welcome to Feedback Collector</h2>
      <p style={{color:"black",textAlign:"center"}}>Add your Feedback</p>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Enter Your Name:</label>
          <input type="text" {...formik.getFieldProps("name")} className="form-input"/>
          {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Enter Your Email:</label>
          <input type="email" {...formik.getFieldProps("email")} className="form-input"/>
          {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
        </div>

        <div className="form-group">
          <label>About :</label>
          <input type="text" {...formik.getFieldProps("about")} className="form-input" />
          {formik.touched.about && formik.errors.about && <div className="error">{formik.errors.about}</div>}
        </div>

        <div className="form-group">
          <label>Feedback:</label>
          <textarea {...formik.getFieldProps("message")} className="form-input"/>
          {formik.touched.message && formik.errors.message && <div className="error">{formik.errors.message}</div>}
        </div>

        <div className="form-group">
          <label>Rating(1 to 5):</label>
          <input type="number" {...formik.getFieldProps("rating")} className="form-input" />
          {formik.touched.rating && formik.errors.rating && <div className="error">{formik.errors.rating}</div>}

        </div>

        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="submit-btn" onClick={() => navigate("/list")}>
          See All Feedbacks
        </button>
      </form>
    </div>
  
    // when you click on see all feedbacks it will directly navigate to
    //  feedback list because i have used navigation hook here
  );
}

export default FeedbackForm;
