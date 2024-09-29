const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Sample healthcare facilities data for Rivers State
const healthcareFacilities = [
  {
    id: 1,
    name: 'Rivers State University Teaching Hospital',
    latitude: 4.81299,
    longitude: 7.00261,
    description: 'Public hospital offering specialized healthcare services.',
  },
  {
    id: 2,
    name: 'Braithwaite Memorial Specialist Hospital',
    latitude: 4.80363,
    longitude: 7.02267,
    description: 'A government hospital providing a range of medical services.',
  },
  {
    id: 3,
    name: 'Port Harcourt Teaching Hospital',
    latitude: 4.80214,
    longitude: 7.03053,
    description: 'A tertiary hospital providing various medical and surgical services.',
  },
  {
    id: 4,
    name: 'Chike Akisanya Memorial Hospital',
    latitude: 4.76729,
    longitude: 7.03305,
    description: 'A private hospital known for maternity and pediatric care.',
  },
  {
    id: 5,
    name: 'University of Port Harcourt Teaching Hospital',
    latitude: 4.86735,
    longitude: 7.03484,
    description: 'A teaching hospital offering specialized care and education.',
  },
  {
    id: 6,
    name: 'Lifecare Hospital',
    latitude: 4.80382,
    longitude: 6.98485,
    description: 'A private healthcare facility providing comprehensive medical services.',
  },
  {
    id: 7,
    name: 'Portharcourt Central Hospital',
    latitude: 4.80340,
    longitude: 7.01340,
    description: 'A public hospital serving the central part of Port Harcourt.',
  },
  {
    id: 8,
    name: 'Obi Wali Hospital',
    latitude: 4.76535,
    longitude: 7.02572,
    description: 'A community hospital with a range of health services.',
  },
  {
    id: 9,
    name: 'St. Margaret’s Hospital',
    latitude: 4.75156,
    longitude: 6.99678,
    description: 'A private hospital providing general healthcare services.',
  },
  {
    id: 10,
    name: 'First Delta Medical Center',
    latitude: 4.74832,
    longitude: 6.97785,
    description: 'A private medical center offering various health services.',
  },
];

// In-memory array to store contact submissions
const contactSubmissions = [];

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Define an endpoint to get healthcare facilities
app.get('/api/healthcare-facilities', (req, res) => {
  res.json(healthcareFacilities); // Return the healthcare facilities data
});

// Define an endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Simulate saving the contact data to a database
    const newContact = { name, email, message, date: new Date() };
    contactSubmissions.push(newContact);

    // Log the contact data (optional)
    console.log('New Contact Submission:', newContact);

    // Send a response back to the client
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ message: 'An error occurred while saving your contact data.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
