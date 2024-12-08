

function checkPasswordStrength(password , passwordStrengthBar , passwordStrengthLabel , passwordStrengthLabelSpan) {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;

    if (score < 3) {
        passwordStrengthBar.classList.remove('w-[60%]','w-[90%]' , 'bg-green-500' ,  'bg-yellow-500');
        passwordStrengthLabel.classList.remove('text-green-500' , 'text-yellow-500' , 'text-white');

        passwordStrengthBar.classList.add('w-[30%]' , 'bg-red-500');
        passwordStrengthLabel.classList.add('text-red-500');
        passwordStrengthLabelSpan.innerHTML = 'Weak';
        return;
    } else if (score >= 3 && score <= 4) {
        passwordStrengthBar.classList.remove('w-[30%]','w-[90%]' , 'bg-green-500' ,  'bg-red-500');
        passwordStrengthLabel.classList.remove('text-green-500' , 'text-red-500');

        passwordStrengthBar.classList.add('w-[60%]' , 'bg-yellow-500');
        passwordStrengthLabel.classList.add('text-yellow-500');
        passwordStrengthLabelSpan.innerHTML = 'Medium';
        return;
    } else {
        passwordStrengthBar.classList.remove('w-[60%]','w-[90%]' , 'bg-yellow-500' ,  'bg-red-500');
        passwordStrengthLabel.classList.remove('text-yellow-500' , 'text-red-500');

        passwordStrengthBar.classList.add('w-[90%]' , 'bg-green-500');
        passwordStrengthLabel.classList.add('text-green-500');
        passwordStrengthLabelSpan.innerHTML = 'Strong';
        return;
    }
}

function isValidDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
}

export {checkPasswordStrength , isValidDate};