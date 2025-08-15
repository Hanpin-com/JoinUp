import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);        // { email }
  const [token, setToken] = useState(null);      // demo token
  const [loading, setLoading] = useState(true);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const t = localStorage.getItem("joinup_token");
      const u = localStorage.getItem("joinup_user");
      if (t && u) {
        setToken(t);
        setUser(JSON.parse(u));
      }
    } catch {}
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      let message = "Login failed";
      try { ({ message } = await res.json()); } catch {}
      throw new Error(message);
    }
    const data = await res.json(); // { token, user }
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("joinup_token", data.token);
    localStorage.setItem("joinup_user", JSON.stringify(data.user));
    return data;
  };

  // ✅ NEW: register
  const register = async (email, password) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      let message = "Sign up failed";
      try { ({ message } = await res.json()); } catch {}
      throw new Error(message);
    }
    const data = await res.json(); // { token, user }
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("joinup_token", data.token);
    localStorage.setItem("joinup_user", JSON.stringify(data.user));
    return data;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    try {
      localStorage.removeItem("joinup_token");
      localStorage.removeItem("joinup_user");
    } catch {}
    router.push("/");
  };

  const value = useMemo(() => ({ user, token, loading, login, register, logout }), [user, token, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

