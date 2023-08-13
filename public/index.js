//This file is used to simply Get data from the user interface and delegate the actions
import '@babel/polyfill';
import { displayMap } from './leaflet';
import { login, logout } from './login';
// import { updateSettings } from './updateSettings';

// DOM ELements
const mapbox = document.getElementById('map');
const loginForm = document.querySelector('.form');
const logOutBtn = document.querySelector('.nav__el--logout');

//Delegation
if (mapbox) {
  // Get locations from HTML
  const locations = JSON.parse(mapbox.dataset.locations);
  //function call in leaflet.js
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //VALUES
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(email, password);
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);
