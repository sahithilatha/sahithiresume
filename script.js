// submit("DOMContentLoaded", () => {
//   console.log("Portfolio website loaded successfully!");
// });
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("VhbFpresboen2k0JG"); // Replace with your EmailJS Public Key
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Collect form data
  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const message = document.querySelector('textarea[placeholder="Your Message"]').value;

  // Send email via EmailJS
  emailjs
    .send("service_a0bpd24", "template_ydjfwqj", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      function (response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log("FAILED...", error);
      }
    );
});