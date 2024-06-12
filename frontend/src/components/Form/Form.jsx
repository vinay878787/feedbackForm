import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [formData, setFormData] = useState({
    category: "",
    heading: "",
    feedback: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.category || !formData.heading || !formData.feedback){
      alert("Please provide all the fields");
      return;
    }
    console.log(formData);
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.heading}>Please provide your feedback</div>

        <label htmlFor="category" className={styles.label}>Category</label>
        <select id="category" value={formData.category} onChange={handleChange} className={styles.inputBox}>
          <option value="" disabled>Choose the category</option>
          <option value="product-features">Product Features</option>
          <option value="product-pricing">Product Pricing</option>
          <option value="product-usability">Product Usability</option>
        </select>

        <label htmlFor="heading" className={styles.label}>Heading</label>
        <input
          id="heading"
          placeholder="Heading for feedback"
          value={formData.heading}
          onChange={handleChange}
          className={styles.inputBox}
        />

        <label htmlFor="feedback" className={styles.label}>Feedback</label>
        <textarea
          id="feedback"
          placeholder="Please provide your feedback"
          value={formData.feedback}
          onChange={handleChange}
          className={styles.inputBox}
          rows="5"
          cols="30"
        />

        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
