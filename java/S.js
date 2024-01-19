function saveUsername(event) {
    event.preventDefault(); // Prevent form submission
    var usernameInput = document.getElementById("username");
    var usernameValue = usernameInput.value;

    // Save the username to localStorage
    localStorage.setItem("savedUsername", usernameValue);

    // Redirect to another page (e.g., result.html)
    window.location.href = "result.html";
}