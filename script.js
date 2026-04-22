const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const password = form.elements["password"].value;
    const address = form.elements["address"].value;
    const username = form.elements["username"].value;

    let isValid = true;

    if (name.trim() === "") {
        alert("Name cannot be empty");
       isValid = false;
    }

    if (address.trim() === "") {
       alert("Address cannot be empty");
      isValid = false;
    }

    if (phone.trim() === "") {
       alert("Phone number cannot be empty");
        isValid = false;
    }

    if (email.trim() === "") {
       alert("Email cannot be empty");
      isValid = false;
    }

    if (username.trim() === "") {
        alert("Username cannot be empty");
        isValid = false;
    }

    if (password.trim() === "") {
      alert("Password cannot be empty");
     isValid = false;
    }

    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Name should only contain letters and spaces");
        isValid = false;
    }

    const emailPattern = /^[^@]+@[^@]+\.(com|cn)$/;
    if (!emailPattern.test(email)) {
        alert("Email must end with .com or .cn");
        isValid = false;
    }

    const phonePattern = /^1\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number is not valid");
        isValid = false;
    }

    const passPattern = /^[A-Za-z0-9]{6,}$/;
    if (!passPattern.test(password)) {
        alert("Password must be at least 6 letters or numbers");
        isValid = false;
    }

    const addressPattern = /^[A-Za-z0-9\s]+$/;
    if (!addressPattern.test(address)) {
        alert("Address can only contain letters, numbers and spaces");
        isValid = false;
    }

    const userPattern = /^[A-Za-z0-9]{6,}$/;
    if (!userPattern.test(username)) {
        alert("Username must be at least 6 letters or numbers");
        isValid = false;
    }

    if (!isValid) {
    event.preventDefault();
    }

});