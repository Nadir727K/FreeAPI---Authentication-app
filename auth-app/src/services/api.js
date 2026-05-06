const BASE = "https://api.freeapi.app/api/v1/users";

export async function registerUser(data) {
  try {
    const res = await fetch(BASE + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    return { ok: res.ok, data: json };
  } catch (err) {
    return { ok: false, data: { message: "Network error" } };
  }
}

export async function loginUser(data) {
  try {
    const res = await fetch(BASE + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(json.data));
    }

    return { ok: res.ok, data: json };
  } catch (err) {
    return { ok: false, data: { message: "Network error" } };
  }
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function logout() {
  localStorage.removeItem("user");
}