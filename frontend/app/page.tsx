"use client";
import { useLogin } from './hooks/useLogin'
export default function Home() {
  const { username, password, setPassword, setUsername, handleLogin, error } = useLogin()
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {error !== null && (
        <p>{error}</p>
      )}
      <form onSubmit={(e) => { e.preventDefault(); handleLogin }}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">LogIn</legend>

          <label className="label">Username</label>
          <input type="text" className="input" onChange={(e) => setUsername(e.target.value)} />

          <label className="label">Password</label>
          <input type="password" className="input" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="btn">Default</button>
        </fieldset>
      </form>
    </div>
  );
}
