document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Собираем данные формы
    const formData = new FormData(event.target);

    // Отправляем данные на сервер
    fetch('/register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Редирект на страницу входа
            window.location.href = '/login';
        } else {
            alert('Registration failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
