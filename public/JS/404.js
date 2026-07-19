'use strict';

const myNotes = document.getElementById('goToMyNotes');
const mainPage = document.getElementById('goToMainPage');
const login = document.getElementById('goToLoginBtn');
const settings = document.getElementById('goToSettingsBtn');
const app = document.getElementById('goToAppPageBtn');

myNotes.addEventListener('click', () => {
  window.location.href = '/secretnotes/app';
});

mainPage.addEventListener('click', () => {
  window.location.href = '/secretnotes';
});

login.addEventListener('click', () => {
  window.location.href = '/secretnotes/login';
});

settings.addEventListener('click', () => {
  window.location.href = '/secretnotes/app/settings';
});

app.addEventListener('click', () => {
  window.location.href = '/secretnotes/app';
});
