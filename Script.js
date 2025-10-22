document.addEventListener("DOMContentLoaded", () => {
  // Time updater
  function updateTime() {
    const timeElement = document.getElementById("time");
    if (timeElement) timeElement.textContent = Date.now();
  }

  updateTime();
  setInterval(updateTime, 1000);

  // Form validation
  const form = document.getElementById("contactForm");
  if (!form) return; // stop if form not found

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorSubject = document.getElementById("error-subject");
    const errorMessage = document.getElementById("error-message");
    const successMsg = document.getElementById("success");

    [errorName, errorEmail, errorSubject, errorMessage, successMsg].forEach(
      (e) => (e.textContent = "")
    );
    [name, email, subject, message].forEach((input) =>
      input.classList.remove("error-border")
    );

    let valid = true;

    if (name.value.trim() === "") {
      errorName.textContent = "Please enter your full name.";
      name.classList.add("error-border");
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      errorEmail.textContent = "Please enter your email address.";
      email.classList.add("error-border");
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      errorEmail.textContent =
        "Please enter a valid email address (e.g., example@email.com).";
      email.classList.add("error-border");
      valid = false;
    }

    if (subject.value.trim() === "") {
      errorSubject.textContent = "Please enter a subject.";
      subject.classList.add("error-border");
      valid = false;
    }

    if (message.value.trim() === "" || message.value.trim().length < 10) {
      errorMessage.textContent =
        "Please enter a message with at least 10 characters.";
      message.classList.add("error-border");
      valid = false;
    }

    if (valid) {
      successMsg.textContent = "✅ Message sent successfully!";
      this.reset();
    }
  });
});
