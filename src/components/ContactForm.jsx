import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleNameChange = (value) => {
    setName(value);
    setNameError(value.trim() === '' ? 'Name is required' : '');
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (value.trim() === '') {
      setEmailError('Email is required');
    } else if (!validateEmail(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', name, email, message);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
        {nameError && <span className="error">{nameError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button" disabled={nameError || emailError}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
