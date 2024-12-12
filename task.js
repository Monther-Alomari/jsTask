let username = prompt("Enter your username:");
let password = prompt("Enter your password:");
let attempts = 1;

while (password !== "123" && attempts < 5) {
  password = prompt("Incorrect password. Please enter it again:");
  attempts++;
}

if (password === "123") {
  alert('Welcome, ${username}');
} else {
  alert("Please try again later.");
}