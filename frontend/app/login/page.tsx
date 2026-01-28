'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginService } from '../../service/auth.service';

export default function LoginPage() {
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await loginService({
        login_user: loginUser,
        login_password: loginPassword,
      });

      if (response.result) {
        // Guardar datos en localStorage
        localStorage.setItem('authData', JSON.stringify(response.data));
        localStorage.setItem('isAuthenticated', 'true');
        // Redirigir al dashboard
        router.push('/dashboard');
      } else {
        setError(response.message);
      }
    } catch {
      setError('Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md'>
        <div className='flex justify-center mb-6'>
          <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </div>
        </div>
        <h1 className='text-3xl font-bold text-center text-slate-800 mb-2'>Bienvenido</h1>
        <p className='text-center text-slate-500 mb-6'>Inicia sesión para continuar</p>

        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-semibold text-slate-700 mb-1'>Usuario</label>
            <input
              type='text'
              value={loginUser}
              onChange={e => setLoginUser(e.target.value)}
              className='w-full px-4 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600'
              placeholder='Ingresa tu usuario'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-slate-700 mb-1'>Contraseña</label>
            <input
              type='password'
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
              className='w-full px-4 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600'
              placeholder='Ingresa tu contraseña'
              required
            />
          </div>

          {error && (
            <div className='bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg p-2 text-center'>
              {error}
            </div>
          )}

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60'
          >
            {loading ? 'Validando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
}
