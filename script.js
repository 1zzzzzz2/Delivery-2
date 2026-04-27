const form = document.getElementById("form");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();
    success.textContent = "";

    const data = new FormData(form);
    let valid = true;

    const fields = {
        name: {
            regex: /^[A-Za-z\s]+$/,
            message: "Only letters and spaces"
        },
        address: {
            regex: /^[A-Za-z0-9\s]+$/,
            message: "Only letters and numbers"
        },
        phone: {
            regex: /^1[3-9]\d{9}$/,
            message: "Invalid phone number"
        },
        email: {
            regex: /^[^\s@]+@[^\s@]+\.(com|cn)$/,
            message: "Invalid email"
        },
        username: {
            regex: /^[A-Za-z0-9]{6,}$/,
            message: "At least 6 characters"
        },
        password: {
            regex: /^[A-Za-z0-9]{6,}$/,
            message: "At least 6 characters"
        }
    };

    for (let [key, rule] of Object.entries(fields)) {
        const value = data.get(key).trim();
        const group = form.querySelector(`[name="${key}"]`).parentElement;
        const error = group.querySelector(".error");

        if (value === "") {
            error.textContent = "This field is required";
            valid = false;
            continue;
        }

        if (!rule.regex.test(value)) {
            error.textContent = rule.message;
            valid = false;
        }
    }

    if (valid) {
        success.textContent = "Registration successful!";
        success.style.color = "green";
        form.reset();
    }
});

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}