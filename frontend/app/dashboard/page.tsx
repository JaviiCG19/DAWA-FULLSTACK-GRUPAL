'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { LoginData, Role } from '../../types/auth.types';
import { useProvincias } from '../../hooks/useProvincias';
import { Sidebar } from '../../components/dashboard/Sidebar';
import { DashboardCards } from '../../components/dashboard/DashboardCards';
import { ProvinciasSection } from '../../components/dashboard/ProvinciasSection';

function getInitialAuthData(): LoginData | null {
  if (typeof window === 'undefined') return null;
  const storedData = localStorage.getItem('authData');
  if (!storedData) return null;
  try {
    return JSON.parse(storedData);
  } catch {
    return null;
  }
}

export default function DashboardPage() {
  const [authData] = useState<LoginData | null>(getInitialAuthData);
  const [selectedRole, setSelectedRole] = useState<Role | null>(() => {
    const data = getInitialAuthData();
    return data?.rols[0] ?? null;
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const { provincias, loading: loadingProvincias } = useProvincias();

  const isAuthenticated = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('isAuthenticated') === 'true';
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    localStorage.removeItem('authData');
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  if (!authData) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-slate-900'>
        <div className='text-white text-xl'>Cargando...</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex bg-slate-900 p-2'>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        authData={authData}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        handleLogout={handleLogout}
      />

      <main className='flex-1 p-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Bienvenido, {authData.user.user_names} {authData.user.user_lastnames}
          </h1>
          <p className='text-slate-400'>Panel de administración del sistema</p>
        </div>

        <DashboardCards authData={authData} selectedRole={selectedRole} />

        <ProvinciasSection provincias={provincias} loading={loadingProvincias} />
      </main>
    </div>
  );
}
