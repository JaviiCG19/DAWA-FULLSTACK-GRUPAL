'use client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProvincias } from '../hooks/useProvincias';
import { useCantones } from '../hooks/useCantones';

export default function DashboardPage() {
  const router = useRouter();
  const { provincias, loading: loadingProvincias } = useProvincias();
  const [selectedProvincia, setSelectedProvincia] = useState('');
  const { cantones, loading: loadingCantones } = useCantones(selectedProvincia);
  const [mounted, setMounted] = useState(false);

  const isAuthenticated = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('isAuthenticated') === 'true';
  }, []);

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    localStorage.removeItem('token-app');
    localStorage.removeItem('isAuthenticated');
    router.push('/');
  };

  const handleProvinciaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvincia(e.target.value);
  };

  if (!mounted) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-base-300'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-base-300'>
      <div className='navbar bg-base-100 shadow-lg'>
        <div className='flex-1'>
          <span className='text-xl font-bold px-4'>DAWA - Sistema de Provincias y Cantones</span>
        </div>
        <div className='flex-none'>
          <button onClick={handleLogout} className='btn btn-error btn-outline'>
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className='p-6 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Pantalla Principal</h1>

        {/* Select de Provincias */}
        <div className='card bg-base-100 shadow-xl mb-6'>
          <div className='card-body'>
            <h2 className='card-title'>Seleccionar Provincia</h2>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Provincia</span>
              </label>
              <select
                className='select select-bordered select-primary w-full'
                value={selectedProvincia}
                onChange={handleProvinciaChange}
                disabled={loadingProvincias}
              >
                <option value=''>
                  {loadingProvincias ? 'Cargando provincias...' : '-- Seleccione una provincia --'}
                </option>
                {provincias.map(provincia => (
                  <option key={provincia.codigo} value={provincia.codigo}>
                    {provincia.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {selectedProvincia && (
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>
                Cantones de {provincias.find(p => p.codigo === selectedProvincia)?.nombre}
              </h2>

              {loadingCantones ? (
                <div className='flex justify-center py-8'>
                  <span className='loading loading-spinner loading-lg' />
                </div>
              ) : cantones.length === 0 ? (
                <div className='alert alert-info'>
                  <span>No se encontraron cantones para esta provincia.</span>
                </div>
              ) : (
                <div className='overflow-x-auto'>
                  <table className='table table-zebra'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Código</th>
                        <th>Nombre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cantones.map((canton, index) => (
                        <tr key={canton.codigo} className='hover'>
                          <td>{index + 1}</td>
                          <td>
                            <span className='badge badge-ghost'>{canton.codigo}</span>
                          </td>
                          <td>{canton.nombre}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mensaje cuando no hay provincia seleccionada */}
        {!selectedProvincia && !loadingProvincias && (
          <div className='alert alert-warning'>
            <span>Seleccione una provincia para ver sus cantones.</span>
          </div>
        )}
      </div>
    </div>
  );
}
