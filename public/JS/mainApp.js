'use strict';

const modalOverlay = document.getElementById('modal-overlay');
const logoutModal = document.getElementById('logoutModal');
const logoutBtn = document.getElementById('logoutBtn');
const logoutConfirmBtn = document.getElementById('logoutConfirmBtn');
const logoutCancelBtn = document.getElementById('logoutCancelBtn');

const alertBanner = document.getElementById('alertBanner');
const alerTitle = document.getElementById('alert-title');
const alerDescription = document.getElementById('alert-desciption');

logoutBtn.addEventListener('click', () => {
  logoutModal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
});

logoutConfirmBtn.addEventListener('click', () => {
  logoutModal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
  popAlert(200, 'Wylogowano pomyślnie.', 'Do zobaczenia. \u{1F44B}');

  setTimeout(() => {
    localStorage.removeItem('jwt');
    window.location.href = '/secretnotes';
  }, 3000);
});

logoutCancelBtn.addEventListener('click', () => {
  logoutModal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
});

function popAlert(statusCode, title, description) {
  // CLASS RESET
  alertBanner.classList.remove('alertError');
  alertBanner.classList.remove('alertSuccess');
  alertBanner.classList.remove('show');

  alertBanner.classList.add('show');

  if (
    statusCode.toString().startsWith('4') ||
    statusCode.toString().startsWith('5')
  ) {
    console.log('add classlist error');
    alertBanner.classList.add('alertError');
  } else if (statusCode.toString().startsWith('2')) {
    console.log('add classlist success');
    alertBanner.classList.add('alertSuccess');
  } else return;

  alerTitle.textContent = title;
  alerDescription.textContent = description;

  setTimeout(() => {
    alertBanner.classList.remove('error');
    alertBanner.classList.remove('success');
    alertBanner.classList.remove('show');
  }, 3000);
}
