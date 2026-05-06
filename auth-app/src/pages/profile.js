import { getUser, logout } from "../services/api.js";
import { showToast } from "../utils/toast.js";

export function renderProfile(app) {
  const data = getUser();
  const user = data?.user || data;

  app.innerHTML = `
    <div class="card">
      <h2>Welcome, ${user.username}</h2>

      <div class="profile">
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Role:</strong> ${user.role}</p>
      </div>

      <button id="logout">Logout</button>
    </div>
  `;

  document.getElementById("logout").onclick = () => {
    logout();
    showToast("Logged out");
    window.location.hash = "#/login";
  };
}