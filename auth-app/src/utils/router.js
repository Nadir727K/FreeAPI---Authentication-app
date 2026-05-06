import { renderRegister } from '../pages/register.js';
import { renderLogin } from '../pages/login.js';
import { renderProfile } from '../pages/profile.js';
import { getUser } from '../services/api.js';

export function initRouter() {
  window.addEventListener('hashchange', route);
  route();
}

function route() {
  const app = document.getElementById('app');
  const hash = window.location.hash;

  app.innerHTML = '';

  if (hash === '#/login') {
    renderLogin(app);
  } 
  else if (hash === '#/profile') {
    if (!getUser()) {
      window.location.hash = '#/login';
      return;
    }
    renderProfile(app);
  } 
  else {
    renderRegister(app);
  }
}