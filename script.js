document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("#email");
  const errorSpan = document.querySelector(".error");

  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const emailValue = emailInput.value.trim();

    if (!emailPattern.test(emailValue)) {
      // Show error message if email is invalid
      errorSpan.style.display = "block";
      emailInput.style.borderColor = "hsl(4, 100%, 67%)"; // Red border for error
    } else {
      // If email is valid
      errorSpan.style.display = "none"; // Hide error message
      emailInput.style.borderColor = "var(--clr-neutral-200)"; // Reset border color

      // Display success message
      const successMessage = document.createElement("p");
      successMessage.textContent = "Thank you for subscribing!";
      successMessage.style.color = "green";
      form.appendChild(successMessage);

      // Clear input field after submission
      emailInput.value = "";

      // Optionally, you can hide the success message after a few seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    }
  });

  // Optional: Remove the error message when the user starts typing
  emailInput.addEventListener("input", () => {
    errorSpan.style.display = "none";
    emailInput.style.borderColor = "var(--clr-neutral-200)";
  });
});
