import { useState } from "react";
import { api } from "../api/Api";
import toast from "react-hot-toast";

function AuthForm({ onLoginSuccess }) {
  const [tab, setTab] = useState("login");
  const [isAdminRegister, setIsAdminRegister] = useState(false);
  const [loadig, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    adminKey: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      setLoading(true)
      const url = isAdminRegister
        ? "/users/admin/register"
        : "/users/register";

      const payload = isAdminRegister
        ? {
          name: form.name,
          email: form.email,
          password: form.password,
          adminKey: form.adminKey,
        }
        : {
          name: form.name,
          email: form.email,
          password: form.password,
        };

      const res = await api.post(url, payload);
      toast.success(res.data.message || "Registered!");
      setLoading(false)
      setTab("login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Register failed!");
      setLoading(false)
    }
  };

  const login = async () => {
    try {
      setLoading(true)
      const res = await api.post("/users/login", {
        email: form.email,
        password: form.password,
      });

      toast.success("Login success!");
      onLoginSuccess(res.data?.data?.role || "user");
      setLoading(false)
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed!");
      setLoading(false)
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex gap-2">
        <button
          onClick={() => setTab("login")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${tab === "login"
            ? "bg-blue-600"
            : "bg-white/10 hover:bg-white/15"
            }`}
        >
          Login
        </button>

        <button
          onClick={() => setTab("register")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${tab === "register"
            ? "bg-blue-600"
            : "bg-white/10 hover:bg-white/15"
            }`}
        >
          Register
        </button>
      </div>

      {tab === "register" && (
        <div className="mt-6 grid gap-3">
          <h2 className="text-lg font-semibold">Create Account</h2>

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <label className="flex items-center gap-2 text-sm text-white/70">
            <input
              type="checkbox"
              checked={isAdminRegister}
              onChange={() => setIsAdminRegister(!isAdminRegister)}
            />
            Register as Admin
          </label>

          {isAdminRegister && (
            <input
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Admin Secret Key"
              name="adminKey"
              value={form.adminKey}
              onChange={handleChange}
            />
          )}

          <button
            onClick={register}
            className={`w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-xl font-semibold`}
          >
            {loadig ? "Registering..." : "Register"}
          </button>
        </div>
      )}

      {tab === "login" && (
        <div className="mt-6 grid gap-3">
          <h2 className="text-lg font-semibold">Login</h2>

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <button
            onClick={login}
            className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-xl font-semibold"
          >
            {loadig ? "Logging..." : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}


export default AuthForm