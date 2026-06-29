'use strict';

const loginBtn = document.getElementById('loginBtn');
const priceListBtn = document.getElementById('priceListBtn');
const functionsBtn = document.getElementById('functionsBtn');

// NAVIGATION --INSIDE INDEX.HTML--
priceListBtn.addEventListener('click', () => {
  window.location.href = '/frontend/#priceList';
});
functionsBtn.addEventListener('click', () => {
  window.location.href = '/frontend/#functions';
});

// NAVIGATION --GO TO LOGIN--
loginBtn.addEventListener('click', () => {
  window.location.href = '/frontend/HTML/login.html';
});
