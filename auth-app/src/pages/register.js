import { registerUser } from "../services/api.js";
import { showToast } from "../utils/toast.js";

export function renderRegister(app) {
  app.innerHTML = `
    <div class="card">
      <h2>Register</h2>

      <form id="form">
        <input name="username" placeholder="Username" required />
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />

        <select name="role">
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <button id="btn">Register</button>
      </form>

      <a href="#/login">Already have account?</a>
    </div>
  `;

  const form = document.getElementById("form");
  const btn = document.getElementById("btn");

  form.onsubmit = async (e) => {
    e.preventDefault();

    btn.disabled = true;
    btn.innerText = "Registering...";

    const f = e.target;

    const res = await registerUser({
      username: f.username.value,
      email: f.email.value,
      password: f.password.value,
      role: f.role.value
    });

    btn.disabled = false;
    btn.innerText = "Register";

    if (res.ok) {
      showToast("Registered successfully ✔");
      window.location.hash = "#/login";
    } else {
      showToast(res.data.message || "Error", "error");
    }
  };
}