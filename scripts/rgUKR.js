
function showRegistration() {
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}


function showLogin() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}


function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    
    if (username && email && password) {
        
        console.log('Користувач зареєстрований:', { username, email, password });
        alert('Реєстрація успішна!');
        showLogin();
    } else {
        alert('Будь ласка, заповніть всі поля.');
    }
}


function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    
    if (username && password) {
        
        console.log('Користувач увійшов:', { username, password });
        alert('Вхід успішний!');
    } else {
        alert('Будь ласка, заповніть всі поля.');
    }
}
