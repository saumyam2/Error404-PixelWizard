const mentorAvailability = {
    mentor1: ["10:00", "11:00", "14:00"],
};

function showAvailability(mentorId) {
    const availabilityDiv = document.getElementById(`availability-${mentorId}`);
    
    const availableTimes = mentorAvailability[mentorId] || [];
    
    availabilityDiv.innerHTML = "<strong>Available Slots:</strong><br>" + 
        availableTimes.map(time => `<span>${time}</span>`).join(", ");
}

// Handle booking form submission
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const mentor = document.getElementById("mentor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

   // Add to booking cart
   const bookingCart = document.getElementById("booking-cart");
   const newBooking = document.createElement("li");
   newBooking.textContent = `Session booked with ${mentor} on ${date} at ${time}.`;
   bookingCart.appendChild(newBooking);

   // Confirmation message
   const confirmationMessage = `Session booked with ${mentor} on ${date} at ${time}.`;
   document.getElementById("confirmation-message").innerText = confirmationMessage;

});

// Handle feedback form submission
document.getElementById("feedback-form").addEventListener("submit", function(event) {
   event.preventDefault();
   
   const name = document.getElementById("feedback-name").value;
   const message = document.getElementById("feedback-message").value;

   // Display feedback
   const feedbackDisplay = document.getElementById("feedback-display");
   const feedbackEntry = document.createElement("p");
   feedbackEntry.textContent = `${name}: ${message}`;
   feedbackDisplay.appendChild(feedbackEntry);

   // Clear form fields
   document.getElementById("feedback-form").reset();
});