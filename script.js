document.getElementById('booking-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    // Get form data
    const pickupLocation = document.getElementById('pickup').value;
    const deliveryLocation = document.getElementById('delivery').value;
    const pickupDate = document.getElementById('date').value;
    const serviceType = document.getElementById('service').value;
  
    // Validate form data
    if (!pickupLocation || !deliveryLocation || !pickupDate || !serviceType) {
      alert('Please fill out all the required fields.');
      return;
    }
  
    try {
      // Send the booking request to the server
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pickupLocation,
          deliveryLocation,
          pickupDate,
          serviceType
        })
      });
  
      if (response.ok) {
        const booking = await response.json();
        console.log('Booking submitted:', booking);
        alert('Booking submitted successfully!');
  
        // Reset the form
        event.target.reset();
      } else {
        const { error } = await response.json();
        alert(`Error: ${error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the booking. Please try again later.');
    }
  });

 
window.addEventListener("load", function() {
    document.body.classList.add("loaded");
  });
