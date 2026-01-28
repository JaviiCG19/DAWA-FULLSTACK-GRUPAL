"use client";

import { useState } from "react";
import { login } from "@/services/loginService";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Complete todos los campos");
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await login(username, password);
      localStorage.setItem("token-app", response.token);
      return true;
    } catch {
      setError("Credenciales incorrectas");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    handleLogin,
    loading,
    error
  };
};
