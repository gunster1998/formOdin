document.getElementById('button-send').addEventListener('click', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('password2').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block'
    } else {
        errorMessage.style.display = 'none';
        alert('Пароли совпадают!')
        document.getElementById('form-input').submit();
    }
});