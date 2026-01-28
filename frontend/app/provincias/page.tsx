'use client';

import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProvincias } from '../../hooks/useProvincias';
import { ProvinciaHeader } from '../../components/provincias/ProvinciaHeader';
import { SearchBar } from '../../components/provincias/SearchBar';
import { StatsCards } from '../../components/provincias/StatsCards';
import { ProvinciaGrid } from '../../components/provincias/ProvinciaGrid';

export default function ProvinciasPage() {
  const router = useRouter();
  const { provincias, loading, error, refetch } = useProvincias();
  const [searchTerm, setSearchTerm] = useState('');

  const isAuthenticated = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('isAuthenticated') === 'true';
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-slate-900'>
        <div className='text-white text-xl'>Verificando autenticación...</div>
      </div>
    );
  }

  const filteredProvincias = provincias.filter(provincia =>
    provincia.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className='min-h-screen bg-slate-900 p-8'>
      <div className='max-w-7xl mx-auto'>
        <ProvinciaHeader
          loading={loading}
          totalProvincias={provincias.length}
          onRefresh={refetch}
        />

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {loading && (
          <div className='flex items-center justify-center py-12'>
            <div className='flex flex-col items-center gap-4'>
              <div className='w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin'></div>
              <p className='text-slate-400'>Cargando provincias...</p>
            </div>
          </div>
        )}

        {error && !loading && (
          <div className='bg-red-900/20 border border-red-500 rounded-lg p-6 mb-6'>
            <div className='flex items-start gap-3'>
              <svg
                className='w-6 h-6 text-red-500 shrink-0 mt-0.5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <div>
                <h3 className='text-red-400 font-semibold mb-1'>Error al cargar las provincias</h3>
                <p className='text-red-300 text-sm'>{error}</p>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            <StatsCards
              totalProvincias={provincias.length}
              filteredCount={filteredProvincias.length}
            />
            <ProvinciaGrid provincias={filteredProvincias} />
          </>
        )}
      </div>
    </div>
  );
}
