import { loginUser } from "../services/api.js";
import { showToast } from "../utils/toast.js";

export function renderLogin(app) {
  app.innerHTML = `
    <div class="card">
      <h2>Login</h2>

      <form id="form">
        <input name="username" placeholder="Username"required />
        <input name="password" type="password" placeholder="Password"required />
        <button id="btn">Login</button>
      </form>

      <a href="#/register">Create account</a>
    </div>
  `;

  const form = document.getElementById("form");
  const btn = document.getElementById("btn");

  form.onsubmit = async (e) => {
    e.preventDefault();

    btn.disabled = true;
    btn.innerText = "Logging in...";

    const f = e.target;

    const res = await loginUser({
      username: f.username.value,
      password: f.password.value
    });

    btn.disabled = false;
    btn.innerText = "Login";

    if (res.ok) {
      showToast("Login successful ✔");
      window.location.hash = "#/profile";
    } else {
      showToast(res.data.message || "Invalid credentials", "error");
    }
  };
}