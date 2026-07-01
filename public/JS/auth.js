'use strict';

const homeBtn = document.getElementById('homeBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

homeBtn.addEventListener('click', () => {
  window.location.href = '/secretnotes';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
