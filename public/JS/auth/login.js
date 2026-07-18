'use strict';
console.log('login.js');

import { API_URL } from '../utils/config.js';

const URL = API_URL;

const homeBtn = document.getElementById('homeBtn');
const loginForm = document.getElementById('loginForm');

homeBtn.addEventListener('click', () => {
  window.location.href = '/secretnotes';
});

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');

    const response = await fetch(`${URL}api/v1/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      console.log('Pomyślnie zalogowano.');
      setTimeout(() => {
        window.location.href = '/secretnotes/app';
      }, 2000);
    } else console.error(data);
  });
}
