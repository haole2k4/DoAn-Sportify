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

function validateLogin(email, password) {
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    var account = accounts.find(function (account) {
        return account.email === email;
    });

    return account && account.password === password;
}

function redirectToIndex() {
    var enteredEmail = document.getElementById('login-email').value;
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    var loggedInAccount = accounts.find(function (account) {
        return account.email === enteredEmail;
    });
    alert('Đăng nhập thành công! Welcome, ' + loggedInAccount.lastName);
    localStorage.setItem('userName', loggedInAccount.lastName);
    console.log('Redirecting to index...');
    if (loggedInAccount.lastName == 'admin') {
        window.location.href = 'admin.html';
    }
    else {
        window.location.href = 'index.html';

    }
}
