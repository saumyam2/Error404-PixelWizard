function showDetails(card) {
    card.querySelector('.mentor-details').style.display = 'block';
}

function hideDetails(card) {
    card.querySelector('.mentor-details').style.display = 'none';
}

function bookSession(mentorName) {
   alert(`Session booked with ${mentorName}`);
}