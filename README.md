# 🔐 AuthFlow – Modern Authentication UI (Vanilla JS + FreeAPI)

A futuristic, glassmorphism-based authentication application built using **Vanilla JavaScript**, powered by the **FreeAPI Authentication Module**. This project demonstrates a complete frontend auth flow including registration, login, session handling, protected routes, and user profile rendering.

---

## 🚀 Live Demo

<img width="1295" height="964" alt="Screenshot 2026-05-06 215640" src="https://github.com/user-attachments/assets/8b3ebe99-a618-4b1c-86a5-094170e973b1" />

---


<img width="1293" height="960" alt="Screenshot 2026-05-06 215654" src="https://github.com/user-attachments/assets/b4f102f2-0ec4-4f82-a105-a0d80c45317b" />


---


## 🎥 Demo Video



https://github.com/user-attachments/assets/1172cb9c-7c46-45ea-9e18-3920e37547d2





---

## 📌 Features

* 🔑 **User Registration**
* 🔐 **User Login**
* 👤 **Authenticated Profile View**
* 🚪 **Logout Functionality**
* 🔒 **Protected Routes (Client-side)**
* 📡 **API Integration with FreeAPI**
* 🍞 **Toast Notifications (Success/Error)**
* ⏳ **Loading States (UX Feedback)**
* 💾 **Session Persistence (LocalStorage)**
* 🎨 **Futuristic UI (Glassmorphism + Glow Effects)**
* 🌌 **Animated Background**

---

## 🧠 Tech Stack

* **HTML5**
* **CSS3 (Custom, Glassmorphism + Animations)**
* **Vanilla JavaScript (ES Modules)**
* **Vite (Build Tool)**

---

## 📁 Project Structure

```
project-root/
│
├── index.html
├── package.json
│
├── src/
│   ├── main.js
│
│   ├── pages/
│   │   ├── login.js
│   │   ├── register.js
│   │   └── profile.js
│
│   ├── services/
│   │   └── api.js
│
│   ├── utils/
│   │   ├── router.js
│   │   └── toast.js
│
│   └── styles/
│       └── style.css
```

---

## ⚙️ Setup & Installation

```bash
# 1. Create project using Vite
npm create vite@latest

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🔗 API Endpoints Used

### Register User

```
POST https://api.freeapi.app/api/v1/users/register
```

### Login User

```
POST https://api.freeapi.app/api/v1/users/login
```

### Logout User

```
POST https://api.freeapi.app/api/v1/users/logout
```

### Get Current User

```
GET https://api.freeapi.app/api/v1/users/current-user
```

---

## 🔄 Authentication Flow

1. User lands on **Register Page**
2. Registers → redirected to **Login**
3. Logs in → session stored in `localStorage`
4. Redirected to **Profile Page**
5. Protected route ensures only logged-in users access profile
6. Logout clears session and redirects to login

---

## 🎨 UI Highlights

* 🔴 Red/Black/White futuristic theme
* 🧊 Glassmorphism cards with blur effects
* ✨ Neon glow interactions
* 🌌 Animated gradient background
* ⚡ Smooth hover & focus animations

---

## 🧩 Key Concepts Covered

* API handling with `fetch`
* Authentication flow (frontend perspective)
* State persistence (localStorage)
* Route protection (client-side)
* Modular JavaScript architecture
* UX improvements (loading states, feedback)

---

## ⚠️ Notes

* This project uses **frontend-only authentication simulation**
* Real-world apps should use:

  * Secure cookies
  * JWT tokens
  * Backend validation

---

## 📌 Future Improvements

* 🔐 JWT-based authentication
* 🌐 Backend integration
* 📊 Dashboard UI
* 🎭 Role-based access control
* 📱 Responsive mobile enhancements

---

## 👨‍💻 Author

**Nadir Khan**

---

This project is made under The Web Dev Cohort 2026 by Chai Code for upload on Masterji app. 
