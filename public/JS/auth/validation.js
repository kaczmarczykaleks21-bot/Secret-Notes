'use strict';

// * THIS SCRIPT * => VALIDATES USER DATA BEFORE SUBMITING LOGIN AND SIGNUP FORMS, TO HELP USER GO THROUGH AUTHORIZATION PROCESS
// IF NULL => SUCCESS, IF ELSE => ERROR

// USERNAME
function validateUsername(username) {
  if (!username) return 'Podaj nazwę użytkownika.'; // Lack of username

  if (username.length < 6) return 'min. 6 znaków.'; // Too short

  if (username.length > 16) return 'max. 16 znaków.'; // Too long

  return null; // Successful Validation
}

// EMAIL
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) return 'Podaj adres e-mail.'; // Lack of Email

  if (!regex.test(email)) return 'Podaj poprawny adres e-mail.'; // Wrong email

  return null; // Successful Validation
}

// PASSWORD
function validatePassword(password) {
  if (!password) return 'Podaj hasło.'; // Lack of password

  if (password.length < 8) return 'min. 8 znaków'; // Too short

  return null; // Successful Validation
}

// PASSWORD CONFIRM
function validatePasswordConfirm(passwordConfirm, password) {
  if (!passwordConfirm) return 'Potwierdź hasło.'; // Lack of password confirmation

  if (passwordConfirm !== password)
    return 'Hasło i potwierdzenie hasła muszą być identyczne.'; // password does not match password confirmation

  return null; // Successful Validation
}

export {
  validateUsername,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
};
