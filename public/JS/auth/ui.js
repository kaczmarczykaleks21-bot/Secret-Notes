'use strict';

import {
  alertIcon,
  alertBanner,
  alertTitle,
  alertDescription,
} from './signup.js';

function showError(alertTextID, errorMessage) {
  alertTextID.classList.remove('show', 'errorText', 'successText'); // RESET CLASSES
  alertTextID.classList.add('show', 'errorText');
  alertTextID.textContent = errorMessage;
}

function showSuccess(alertTextID, successMessage) {
  alertTextID.classList.remove('show', 'errorText', 'successText'); // RESET CLASSES
  alertTextID.classList.add('show', 'successText');
  alertTextID.textContent = successMessage;
}

function popAlert(alertType, title, description) {
  alertBanner.classList.remove('show', 'alertError', 'alertSuccess'); // RESET CLASSES

  if (alertType === 'error') {
    alertBanner.classList.add('show', 'alertError');
    alertIcon.textContent = '\u2718';
    alertTitle.textContent = title;
    alertDescription.textContent = description;
  }

  if (alertType === 'success') {
    alertBanner.classList.add('show', 'alertSuccess');
    alertIcon.textContent = '\u2714';
    alertTitle.textContent = title;
    alertDescription.textContent = description;
  }
}

export { showError, showSuccess, popAlert };
