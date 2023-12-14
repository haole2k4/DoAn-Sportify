var allLocalStorage = localStorage;
console.log(localStorage);
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
    console.log('Entered Email:', email);
    console.log('Stored Email:', localStorage.getItem('email'));
    console.log('Entered Password:', password);
    console.log('Stored Password:', localStorage.getItem('password'));

    return email === predefinedEmail && password === predefinedPassword;
}

function redirectToIndex() {
console.log('Redirecting to index...');    
window.location.href = 'index.html';

}