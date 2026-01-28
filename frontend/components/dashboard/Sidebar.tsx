'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { LoginData, Role } from '../../types/auth.types';
import { ModuleList } from './ModuleList';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  authData: LoginData;
  selectedRole: Role | null;
  setSelectedRole: (role: Role) => void;
  handleLogout: () => void;
}

export function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  authData,
  selectedRole,
  setSelectedRole,
  handleLogout,
}: SidebarProps) {
  return (
    <aside
      className={`${
        sidebarOpen ? 'w-72' : 'w-20'
      } bg-slate-800 min-h-screen transition-all duration-300 flex flex-col rounded-2xl shadow-2xl overflow-hidden`}
    >
      {/* Header del sidebar */}
      <div className='p-4 border-b border-slate-700'>
        <div className='flex items-center justify-between'>
          {sidebarOpen && <h2 className='text-xl font-bold text-white'>Sistema</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='p-2 rounded-lg hover:bg-slate-700 text-slate-400'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Selector de rol */}
      {sidebarOpen && authData.rols.length > 1 && (
        <div className='p-4 border-b border-slate-700'>
          <label className='text-slate-400 text-sm mb-2 block'>Rol activo:</label>
          <select
            value={selectedRole?.rol_id || ''}
            onChange={e => {
              const rol = authData.rols.find(r => r.rol_id === Number(e.target.value));
              if (rol) setSelectedRole(rol);
            }}
            className='w-full bg-slate-700 text-white rounded-lg px-3 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            {authData.rols.map(rol => (
              <option key={rol.rol_id} value={rol.rol_id}>
                {rol.rol_name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Menú dinámico */}
      <nav className='flex-1 overflow-y-auto p-4'>
        {sidebarOpen && (
          <>
            {/* Link estático a Provincias */}
            <div className='mb-4 pb-4 border-b border-slate-700'>
              <h3 className='text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-4'>
                Accesos Directos
              </h3>
              <Link
                href='/provincias'
                className='flex items-center gap-3 px-4 py-2.5 hover:bg-slate-700 rounded-lg transition-colors group'
              >
                <MapPin className='w-4 h-4 text-blue-400 group-hover:text-blue-300' />
                <span className='text-slate-200 group-hover:text-white'>Provincias</span>
              </Link>
            </div>

            {/* Módulos dinámicos del usuario */}
            {selectedRole && selectedRole.modules.length > 0 && (
              <div>
                <h3 className='text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-4'>
                  Módulos
                </h3>
                <ModuleList modules={selectedRole.modules} />
              </div>
            )}
          </>
        )}
      </nav>

      {/* Footer del sidebar - Info usuario */}
      {sidebarOpen && (
        <div className='p-4 border-t border-slate-700'>
          <div className='flex items-center gap-3 mb-3'>
            <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
              <span className='text-white font-semibold'>{authData.user.user_names.charAt(0)}</span>
            </div>
            <div className='flex-1'>
              <p className='text-white text-sm font-medium truncate'>{authData.user.user_names}</p>
              <p className='text-slate-400 text-xs truncate'>{authData.user.user_login_id}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
            Cerrar Sesión
          </button>
        </div>
      )}
    </aside>
  );
}
