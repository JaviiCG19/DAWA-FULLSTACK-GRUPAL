'use client';

import { Provincia } from '../../types/provincia.types';

interface ProvinciaGridProps {
  provincias: Provincia[];
}

export function ProvinciaGrid({ provincias }: ProvinciaGridProps) {
  if (provincias.length === 0) {
    return (
      <div className='bg-slate-800 rounded-xl p-12 text-center border border-slate-700'>
        <svg
          className='w-16 h-16 text-slate-600 mx-auto mb-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <h3 className='text-xl font-semibold text-white mb-2'>No se encontraron provincias</h3>
        <p className='text-slate-400'>Intenta con otro término de búsqueda o limpia el filtro</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {provincias.map(provincia => (
        <div
          key={provincia.codigo}
          className='bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20 group'
        >
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform'>
              <span className='text-white font-bold text-lg'>{provincia.codigo}</span>
            </div>
            <div className='flex-1 min-w-0'>
              <h3 className='text-white font-semibold text-lg mb-1 truncate'>{provincia.nombre}</h3>
              <p className='text-slate-400 text-sm'>Código: {provincia.codigo}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
