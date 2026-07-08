'use strict';

const loginBtn = document.getElementById('loginBtn');
const priceListBtn = document.getElementById('priceListBtn');
const functionsBtn = document.getElementById('functionsBtn');

// NAVIGATION --INSIDE INDEX.HTML--
priceListBtn.addEventListener('click', () => {
  window.location.href = '/secretnotes/#priceList';
});
functionsBtn.addEventListener('click', () => {
  window.location.href = '/secretnotes/#functions';
});

// NAVIGATION --GO TO LOGIN--
loginBtn.addEventListener('click', () => {
  window.location.href = '/secretnotes/signup';
});
