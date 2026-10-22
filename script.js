const form = document.getElementById("registrationForm");
const phoneInput = document.getElementById("phone");
const message = document.getElementById("message");

phoneInput.addEventListener("input", function () {
phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);

```
const phone = phoneInput.value;

if (/^\d{10}$/.test(phone)) {
    phoneInput.setCustomValidity("");
} else {
    phoneInput.setCustomValidity(
        "Please enter a valid 10-digit phone number."
    );
}
```

});

form.addEventListener("submit", function (event) {
event.preventDefault();

```
if (!form.checkValidity()) {
    form.reportValidity();
    return;
}

message.textContent = "Registration successful!";
form.reset();
```

});
