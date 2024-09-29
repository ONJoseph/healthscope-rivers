import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState(null); // State for error message
  const [success, setSuccess] = useState(null); // State for success message
  const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submitting
    setSuccess(null); // Reset success state before submitting

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      setSuccess(result.message); // Set success message
      setSubmittedData(result.contact); // Set the submitted contact data
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setError('An error occurred while submitting the form. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Contact Us</h2>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        {success && <p className="text-green-500">{success}</p>} {/* Display success message */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {/* Display the submitted data */}
      {submittedData && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
          <p><strong>Date:</strong> {submittedData.date}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
