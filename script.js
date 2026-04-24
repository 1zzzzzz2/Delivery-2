const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    document.getElementById("nameError").textContent = "";
    document.getElementById("addressError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const password = form.elements["password"].value;
    const address = form.elements["address"].value;
    const username = form.elements["username"].value;

    let isValid = true;

    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name cannot be empty";
        isValid = false;
    }

    if (address.trim() === "") {
        document.getElementById("addressError").textContent = "Address cannot be empty";
        isValid = false;
    }

    if (phone.trim() === "") {
        document.getElementById("phoneError").textContent = "Phone number cannot be empty";
        isValid = false;
    }

    if (email.trim() === "") {
        document.getElementById("emailError").textContent = "Email cannot be empty";
        isValid = false;
    }

    if (username.trim() === "") {
        document.getElementById("usernameError").textContent = "Username cannot be empty";
        isValid = false;
    }

    if (password.trim() === "") {
        document.getElementById("passwordError").textContent = "Password cannot be empty";
        isValid = false;
    }

    const namePattern = /^[A-Za-z\s]+$/;
    if (name !== "" && !namePattern.test(name)) {
        document.getElementById("nameError").textContent = "Only letters and spaces allowed";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|cn)$/;
    if (email !== "" && !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    }

    const phonePattern = /^1[3-9]\d{9}$/;
    if (phone !== "" && !phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Invalid phone number";
        isValid = false;
    }

    const passPattern = /^[A-Za-z0-9]{6,}$/;
    if (password !== "" && !passPattern.test(password)) {
        document.getElementById("passwordError").textContent = "At least 6 letters or numbers";
        isValid = false;
    }

    const addressPattern = /^[A-Za-z0-9\s]+$/;
    if (address !== "" && !addressPattern.test(address)) {
        document.getElementById("addressError").textContent = "Only letters, numbers and spaces allowed";
        isValid = false;
    }

    const userPattern = /^[A-Za-z0-9]{6,}$/;
    if (username !== "" && !userPattern.test(username)) {
        document.getElementById("usernameError").textContent = "At least 6 letters or numbers";
        isValid = false;
    }

    if (!isValid) {
    event.preventDefault();
    }

});