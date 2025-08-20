// Register Logic (Updated)
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get values from the registration form
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const mobile = document.getElementById('mobile').value.trim();  // Capture mobile number

  // Create a user object with mobile included
  const user = { name, email, password, mobile };

  // Retrieve existing users from localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if email already exists in the user list
  const exists = users.find(u => u.email === email);
  if (exists) {
    document.getElementById('message').textContent = 'Email already registered!';
    document.getElementById('message').style.color = 'red';
    return;
  }

  // Add the new user to the list
  users.push(user);

  // Save updated user list to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Notify user of successful registration
  document.getElementById('message').textContent = 'Registered successfully!';
  document.getElementById('message').style.color = 'green';
});

// Login Logic (Updated)
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find the user that matches the email and password
  const matchedUser = users.find(u => u.email === email && u.password === password);

  // If user is found, save to loggedInUser and redirect to details page
  if (matchedUser) {
    localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
    window.location.href = "details.html";  // Redirect to details page
  } else {
    document.getElementById("message").textContent = "Invalid email or password.";
    document.getElementById("message").style.color = "red";
  }
});

// Display User Details (for details.html page)
const user = JSON.parse(localStorage.getItem('loggedInUser'));

// If no user is logged in, redirect to the login page
if (!user) {
  window.location.href = 'index.html';  // Redirect if no user is logged in
} else {
  // Display the user's details on the page
  document.getElementById('userName').textContent = user.name;
  document.getElementById('userEmail').textContent = user.email;
  document.getElementById('userMobile').textContent = user.mobile; // Display mobile number
}

// Logout functionality
function logout() {
  localStorage.removeItem('loggedInUser');  // Remove logged-in user from localStorage
  window.location.href = 'index.html';  // Redirect to login page
}

