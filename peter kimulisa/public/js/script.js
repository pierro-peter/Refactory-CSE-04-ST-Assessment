
// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('flightBookingForm');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Validate the form fields before submission
        if (!validateForm()) {
            // Prevent form submission if validation fails
            event.preventDefault();
            alert('Please fill out all required fields correctly.');
        }
    });

    // Function to validate form fields
    function validateForm() {
        let isValid = true;

        // Check required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.classList.add('error'); // Add error class for styling
            } else {
                field.classList.remove('error'); // Remove error class if valid
            field.classList.remove('error')
        removeError(field);
    }
        });

        return isValid;
    }
});