function login() {
    // Retrieve username and password from local storage
    var storedUsername = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    // Assume you have a function to validate the login
    if (validateLogin(storedUsername, storedPassword)) {
        // Redirect to index or perform other actions
        redirectToIndex();
    } else {
        alert('Invalid username or password');
    }
}

function validateLogin(username, password) {
    // Implement your own validation logic here
    // For example, compare with a predefined username and password
    var predefinedUsername = 'exampleUser';
    var predefinedPassword = 'examplePassword';

    return username === predefinedUsername && password === predefinedPassword;
}

function redirectToIndex() {
    // Implement your redirection logic here
    // For example, window.location.href = 'index.html';
    console.log('Redirecting to index...');
}