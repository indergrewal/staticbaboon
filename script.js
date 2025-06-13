document.addEventListener('DOMContentLoaded', function () {
    var bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for booking! We will get back to you soon.');
            bookingForm.reset();
        });
    }
});
