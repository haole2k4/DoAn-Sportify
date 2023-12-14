function login() {
    var enteredEmail = document.getElementById('login-email').value;
    var enteredPassword = document.getElementById('login-password').value;

    if (validateLogin(enteredEmail, enteredPassword)) {
        redirectToIndex();
    } else {
        alert('Invalid email or password');
    }
}
console.log("hello world");
function validateLogin(email, password) {

    var predefinedEmail = 'exampleUser';
    var predefinedPassword = 'examplePassword';

    return email === predefinedEmail && password === predefinedPassword;
}

function redirectToIndex() {
    window.location.href = 'index.html';
    console.log('Redirecting to index...');
    
}