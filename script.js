document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const submitButton = document.getElementById('submit');
    const existingButton = document.getElementById('existing');

    // Check if there are saved details in localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = checkbox.checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    }

    function handleExistingUserLogin() {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    }

    document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);
    existingButton.addEventListener('click', handleExistingUserLogin);
});
