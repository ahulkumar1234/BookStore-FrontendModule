# 📚 Book Store Frontend (React + Tailwind)

A simple frontend for the **Book Store API** with:

- User Register/Login
- Admin Register/Login
- Books List
- Admin can Create / Update / Delete books
- Cookie based authentication

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- Axios

---

## ⚙️ Installation

### 1) Clone the repository
```bash
git clone <your-frontend-repo-link>
cd <your-frontend-folder>
```
### 2) Install dependencies
```bash
npm install
```
### ▶️ Run Frontend
```bash
npm run dev
```
Frontend will run on:
```bash
http://localhost:5173
```

### 🔗 Backend Connection
Frontend uses Axios instance:
```bash
baseURL: "http://localhost:9000/api/v1"
withCredentials: true
```

### ⚠️ Important (CORS + Cookies)

```js
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
```
## 👑 Admin Testing
### Admin Register API
```http
POST /api/v1/users/admin/register

```
Body:
```json
{
  "name": "Admin Rahul",
  "email": "admin@gmail.com",
  "password": "123456",
  "adminKey": "cuvette@admin123"
}
```
### ✨ Features

## User
- Can view all books
## Admin
- Can create new books
- Can update any books
- Can delete any books
---

# ⭐ Support

## If you found this project helpful, please consider giving it a ⭐ on GitHub!