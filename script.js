$(document).ready(function() {
    $("#signup-form").submit(function(e) {
        e.preventDefault();
        let email = $("#email").val();

        if (email) {
            // Replace with your MailChimp API integration
            // submitEmailToMailchimp(email);
            $("#signup-message").text("Thank you for signing up! Check your email for further instructions.");
        } else {
            $("#signup-message").text("Please enter a valid email address.");
        }
    });
});
