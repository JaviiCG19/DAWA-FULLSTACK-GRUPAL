'use client';
import { useLogin } from './hooks/useLogin';

export default function Home() {
  const { username, password, setPassword, setUsername, handleLogin, error, loading } = useLogin();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-base-300'>
      <form onSubmit={onSubmit}>
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-xl w-100 h-80 border p-6 shadow-xl'>
          <legend className='fieldset-legend text-lg font-bold'>Iniciar Sesión</legend>

          {error && (
            <div className='alert alert-error mb-4'>
              <span>{error}</span>
            </div>
          )}

          <label className='label'>
            <span className='label-text'>Usuario</span>
          </label>
          <input
            type='text'
            value={username}
            className='input input-bordered w-full'
            placeholder='Ingresa tu usuario'
            onChange={e => setUsername(e.target.value)}
          />

          <label className='label mt-2'>
            <span className='label-text'>Contraseña</span>
          </label>
          <input
            type='password'
            value={password}
            className='input input-bordered w-full'
            placeholder='Ingresa tu contraseña'
            onChange={e => setPassword(e.target.value)}
          />

          <button type='submit' className='btn btn-primary w-full mt-6' disabled={loading}>
            {loading ? <span className='loading loading-spinner loading-sm'></span> : 'Ingresar'}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
