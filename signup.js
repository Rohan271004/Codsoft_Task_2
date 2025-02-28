document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const plan = document.getElementById("plan").value;

    if (name === "" || email === "" || password === "" || plan === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert(`Welcome ${name}! You have successfully signed up for the ${plan} plan.`);
    
    // Redirect to homepage or dashboard (update the URL accordingly)
    window.location.href = "index.html";
});
