import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import { api } from "./api/Api";
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const checkLogin = async () => {
    try {
      const res = await api.get("/users/me");
      setLoggedIn(true);
      setRole(res.data.user.role);
    } catch (err) {
      setLoggedIn(false);
      setRole("");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);


  const logout = async () => {
    try {
      setLoading(true)
      await api.post("/users/logout");
      setLoading(false)
    } catch (err) { }
    setLoading(false)
    setLoggedIn(false);
    setRole("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-3xl">
        <Navbar
          loggedIn={loggedIn}
          role={role}
          onLogout={logout}
          onGoAuth={() => { }}
          loading={loading}
        />

        {!loggedIn ? (
          <div className="mt-6">
            <AuthPage
              onLoginSuccess={(r) => {
                setLoggedIn(true);
                setRole(r);
              }}
            />
          </div>
        ) : (
          <Dashboard role={role} />
        )}

        <p className="text-center text-xs text-white/40 mt-4">
          © 2026 Book Store App. All rights reserved.
        </p>
      </div>
    </div>
  );
}
