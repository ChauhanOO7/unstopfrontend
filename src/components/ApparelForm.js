import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ApparelForm = () => {
  const [formData, setFormData] = useState({ type: '', condition: '', action: '', user: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.type || !formData.condition || !formData.action || !formData.user) {
      setError('Please fill out all fields');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/apparel/submit', formData);
      alert('Apparel submitted successfully!');
      setError('');
    } catch (error) {
      setError('Submission failed, please try again.');
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="type" placeholder="Type" onChange={handleChange} />
    //   <input type="text" name="condition" placeholder="Condition" onChange={handleChange} />
    //   <input type="text" name="action" placeholder="Action" onChange={handleChange} />
    //   <input type="text" name="user" placeholder="User" onChange={handleChange} />
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    //   <button type="submit">Submit</button>
    // </form>

    <div className="form-container">
      <h2>Apparel Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Type of Apparel:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />

        <label htmlFor="condition">Condition:</label>
        <select
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          required
        >
          <option value="">Select Condition</option>
          <option value="new">New</option>
          <option value="gently-used">Gently Used</option>
          <option value="worn-out">Worn-out</option>
        </select>

        <label htmlFor="action">Action:</label>
        <select
          id="action"
          name="action"
          value={formData.action}
          onChange={handleChange}
          required
        >
          <option value="">Select Action</option>
          <option value="donate">Donate</option>
          <option value="recycle">Recycle</option>
        </select>

        <label htmlFor="user">Your Name:</label>
        <input
          type="text"
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApparelForm;
