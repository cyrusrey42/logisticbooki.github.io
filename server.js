const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "client" directory
app.use(express.static('client'));

// API endpoints
app.post('/api/bookings', (req, res) => {
  // Process the booking request
  const { pickupLocation, deliveryLocation, pickupDate, serviceType } = req.body;

  // Validate the input data
  if (!pickupLocation || !deliveryLocation || !pickupDate || !serviceType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Save the booking to the database or a data storage system
  // (this is just a placeholder, you would need to implement the actual logic)
  const booking = {
    id: Math.floor(Math.random() * 1000),
    pickupLocation,
    deliveryLocation,
    pickupDate,
    serviceType,
    status: 'Pending'
  };

  // Return the booking details
  res.status(201).json(booking);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
