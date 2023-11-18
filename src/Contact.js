import { useState } from "react";
import "./Contact.css";

export default function About() {
  const initialFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Update errors state
    setErrors(newErrors);

    return isValid;
  };

  const handleFormChange = (event) => {
    const updatedFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(updatedFormData);
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submission
    if (!validateForm()) {
      return;
    }

    // Your form submission logic goes here
    alert(`Thank you ${formData.name}, the admin will be notified, and he will reply to ${formData.email} soon.`);
  };

  return (
    <div className="contactccc">
      <h1>Contact me</h1>
      <p>The site admin can be reached at <strong>atifkunn@gmail.com</strong></p>
      <p>Phone number: <strong>+601117743195</strong></p>
      <p>Sent me a Whatsapps message: <a href="https://wa.me/601117743195" target="_blank" rel="noopener noreferrer">
          click here
        </a>
        
        </p>
      <h1>Or drop your email below</h1>
      <br />

      <form className ="formccc" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} />
        <span style={{ color: 'red' }}>{errors.name}</span>
        <br /><br />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} />
        <span style={{ color: 'red' }}>{errors.email}</span>
        <br /><br />

        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleFormChange} rows={4} />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}