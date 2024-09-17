document.getElementById('contactForm').addEventListener('submit', function (event){
    event.preventDefault();

    const form = this;
    const name = document.getElementById('InputName');
    const email = document.getElementById('InputEmail');
    const message = document.getElementById('InputMessage');
    const submitButton = document.getElementById('submitButton');
    const loadingIcon = submitButton.querySelector('.loading-icon');
    const successMessage = document.querySelector('.success-message');

    form.classList.remove('was-validated');
    successMessage.style.display = 'none';

    if (form.checkValidity()){
        submitButton.style.display = 'none';
        loadingIcon.style.display = 'inline-block';

        const data = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        fetch('https://debug.nafkhanzam.com/web-programming-e03', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            successMessage.style.display = 'block';
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            submitButton.style.display = 'inline-block';
            loadingIcon.style.display = 'none';
        });
    } else {
        form.classList.add('was-validated');
    }
});