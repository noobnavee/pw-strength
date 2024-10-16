function checkPassword() {
    const password = document.getElementById('password').value;
    let strength = '';
    let suggestion = '';

    const criteria = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        digit: /\d/.test(password),
        special: /[@$!%*?&]/.test(password)
    };

    const strengthScore = Object.values(criteria).filter(Boolean).length;

    if (strengthScore < 3) {
        strength = 'Weak';
        suggestion = 'Consider adding more variety to your password.';
    } else if (strengthScore === 3) {
        strength = 'Moderate';
        suggestion = 'Good, but try to add a special character and increase the length.';
    } else {
        strength = 'Strong';
        suggestion = 'Great password!';
    }

    document.getElementById('result').innerHTML = `Password Strength: ${strength}<br>Suggestion: ${suggestion}`;
}
