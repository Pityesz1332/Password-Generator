function generatePassword(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:"<>?|[];\',./`~';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('passwordLength').value);
    if (length < 1 || isNaN(length)) {
        alert('Use a valid number!');
        return;
    }
    const password = generatePassword(length);
    document.getElementById('generatedPassword').textContent = password;
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const password = document.getElementById('generatedPassword').textContent;
    if (!password || password === 'Your Password') {
        alert('Generate a password first');
        return;
    }
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied!');
    }).catch(err => {
        console.error('Copy failed:', err);
    });
});