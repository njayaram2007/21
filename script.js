const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

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
