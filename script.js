// Room Management
document.getElementById('roomForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const roomType = document.getElementById('roomType').value;
    const roomPrice = document.getElementById('roomPrice').value;
    
    const roomList = document.getElementById('roomList');
    roomList.innerHTML += `<p>${roomType} - $${roomPrice}</p>`;
    
    event.target.reset();
});

// Reservation Management
document.getElementById('reservationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const guestName = document.getElementById('guestName').value;
    const roomBooked = document.getElementById('roomBooked').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    const reservationList = document.getElementById('reservationList');
    reservationList.innerHTML += `<p>${guestName} booked ${roomBooked} from ${checkin} to ${checkout}</p>`;
    
    event.target.reset();
});

// Guest Management
document.getElementById('guestForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const guestName = document.getElementById('guestName').value;
    const guestEmail = document.getElementById('guestEmail').value;

    const guestList = document.getElementById('guestList');
    guestList.innerHTML += `<p>${guestName} (${guestEmail})</p>`;
    
    event.target.reset();
});

// Payment Management
document.getElementById('paymentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reservationId = document.getElementById('reservationId').value;
    const amount = document.getElementById('amount').value;

    const paymentList = document.getElementById('paymentList');
    paymentList.innerHTML += `<p>Payment of $${amount} processed for Reservation ID: ${reservationId}</p>`;
    
    event.target.reset();
});
