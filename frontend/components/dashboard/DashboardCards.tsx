'use client';

import { LoginData, Role } from '../../types/auth.types';

interface DashboardCardsProps {
  authData: LoginData;
  selectedRole: Role | null;
}

export function DashboardCards({ authData, selectedRole }: DashboardCardsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {/* Card de información del usuario */}
      <div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center'>
            <svg
              className='w-6 h-6 text-white'
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
          <div>
            <h3 className='text-lg font-semibold text-white'>Mi Perfil</h3>
            <p className='text-slate-400 text-sm'>Información de cuenta</p>
          </div>
        </div>
        <div className='space-y-2'>
          <p className='text-slate-300'>
            <span className='text-slate-500'>Usuario:</span> {authData.user.user_login_id}
          </p>
          <p className='text-slate-300'>
            <span className='text-slate-500'>Nombre:</span> {authData.user.user_names}
          </p>
          <p className='text-slate-300'>
            <span className='text-slate-500'>Apellidos:</span> {authData.user.user_lastnames}
          </p>
          <p className='text-slate-300'>
            <span className='text-slate-500'>Último acceso:</span>{' '}
            {authData.user.user_last_login || 'Primera vez'}
          </p>
        </div>
      </div>

      {/* Card de roles */}
      <div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center'>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-white'>Mis Roles</h3>
            <p className='text-slate-400 text-sm'>Permisos asignados</p>
          </div>
        </div>
        <div className='space-y-2'>
          {authData.rols.map(rol => (
            <div key={rol.rol_id} className='flex items-center gap-2'>
              <span className='w-2 h-2 bg-green-500 rounded-full'></span>
              <span className='text-slate-300'>{rol.rol_name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card de módulos */}
      <div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center'>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              />
            </svg>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-white'>Módulos</h3>
            <p className='text-slate-400 text-sm'>Acceso a funciones</p>
          </div>
        </div>
        <div className='space-y-2'>
          {selectedRole?.modules.map(mod => (
            <div key={mod.mod_id} className='flex items-center gap-2'>
              <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
              <span className='text-slate-300'>{mod.mod_name}</span>
              <span className='text-slate-500 text-sm'>({mod.menu.length} opciones)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
