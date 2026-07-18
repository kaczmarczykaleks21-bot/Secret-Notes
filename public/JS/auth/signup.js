'use strict';

import { API_URL } from '../utils/config.js';

import {
  validateUsername,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from './validation.js';

import { popAlert, showError, showSuccess } from './ui.js';

const URL = API_URL;

const homeBtn = document.getElementById('homeBtn');
const signupForm = document.getElementById('signupForm');

const closeAlertBtn = document.getElementById('closeAlertBtn');
const alertIcon = document.getElementById('alertIcon');
const alertBanner = document.getElementById('alertBanner');
const alertTitle = document.getElementById('alert-title');
const alertDescription = document.getElementById('alert-desciption');

const formFields = {
  username: {
    input: document.getElementById('signup-username'),
    alert: document.getElementById('usernameErrorText'),
    validator: validateUsername,
  },

  email: {
    input: document.getElementById('signup-email'),
    alert: document.getElementById('emailErrorText'),
    validator: validateEmail,
  },

  password: {
    input: document.getElementById('signup-password'),
    alert: document.getElementById('passwordErrorText'),
    validator: validatePassword,
  },

  passwordConfirm: {
    input: document.getElementById('signup-passwordConfirm'),
    alert: document.getElementById('passwordConfirmErrorText'),
    validator: validatePasswordConfirm,
  },
};

homeBtn.addEventListener('click', () => {
  window.location.href = '/secretnotes';
});

closeAlertBtn.addEventListener('click', () => {
  alertBanner.classList.remove('show', 'alertError', 'alertSuccess');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'F2') {
    resetProgressAnimation();
    popAlert('error', 'tytuł', 'opis');
  }

  if (event.key === 'F4') {
    resetProgressAnimation();
    popAlert('success', 'tytuł', 'opis');
  }
});

function resetProgressAnimation() {
  progress.style.animation = 'none';
  void progress.offsetWidth;
  progress.style.animation = 'shrink 3s linear forwards';
}

if (signupForm) {
  // ==== BEFORE SUBMIT FORM VALIDATION ===

  const usernameInput = formFields.username.input;
  const emailInput = formFields.email.input;
  const passwordInput = formFields.password.input;
  const passwordConfirmInput = formFields.passwordConfirm.input;

  // USERNAME
  usernameInput.addEventListener('input', () => {
    const error = validateUsername(usernameInput.value);
    if (error) {
      showError(formFields.username.alert, error);
    } else {
      showSuccess(formFields.username.alert, 'Poprawna nazwa użytkownika');
    }
  });

  emailInput.addEventListener('input', () => {
    const error = validateEmail(emailInput.value);
    if (error) {
      showError(formFields.email.alert, error);
    } else {
      showSuccess(formFields.email.alert, 'Poprawny e-mail.');
    }
  });

  passwordInput.addEventListener('input', () => {
    const error = validatePassword(passwordInput.value);
    if (error) {
      showError(formFields.password.alert, error);
    } else {
      showSuccess(formFields.password.alert, 'Poprawne hasło.');
    }
  });

  passwordConfirmInput.addEventListener('input', () => {
    const error = validatePasswordConfirm(
      passwordConfirmInput.value,
      passwordInput.value,
    );
    if (error) {
      showError(formFields.passwordConfirm.alert, error);
    } else {
      showSuccess(formFields.passwordConfirm.alert, 'Hasło potwierdzone.');
    }
  });

  // === FORM -> SUBMIT EVENT LISTENER ===
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const response = await fetch(`${URL}api/v1/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        username: formFields.username.value,
        email: formFields.email.value,
        password: formFields.password.value,
        passwordConfirm: formFields.passwordConfirm.value,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert('Zarejestrowano');
    } else {
      console.error(data);
      alert('Zarejestrowano ERROR!');
    }
  });
} else {
  console.log('FORM ERROR!');
}

export { alertIcon, alertBanner, alertTitle, alertDescription };
