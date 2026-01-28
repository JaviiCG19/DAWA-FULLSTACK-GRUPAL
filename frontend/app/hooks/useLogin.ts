'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginService } from '@/services/authService';

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Complete todos los campos');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await loginService(username, password);
      if (response.result) {
        localStorage.setItem('token-app', response.data);
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/dashboard');
        return true;
      } else {
        setError(response.message || 'Error al iniciar sesión');
        return false;
      }
    } catch {
      setError('Error al conectar con el servidor');
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
    error,
  };
};
