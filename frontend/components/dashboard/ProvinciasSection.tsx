'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Provincia } from '../../types/provincia.types';

interface ProvinciaCardProps {
  provincia: Provincia;
}

export function ProvinciaCard({ provincia }: ProvinciaCardProps) {
  return (
    <div className='bg-slate-700 hover:bg-slate-600 rounded-lg p-3 transition-colors cursor-pointer group'>
      <div className='flex flex-col items-center text-center'>
        <div className='w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform'>
          <span className='text-white font-bold text-sm'>{provincia.codigo}</span>
        </div>
        <span className='text-slate-200 text-sm font-medium truncate w-full'>
          {provincia.nombre}
        </span>
      </div>
    </div>
  );
}

interface ProvinciasSectionProps {
  provincias: Provincia[];
  loading: boolean;
}

export function ProvinciasSection({ provincias, loading }: ProvinciasSectionProps) {
  return (
    <div className='mt-8'>
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h2 className='text-2xl font-bold text-white mb-1'>Provincias del Ecuador</h2>
          <p className='text-slate-400'>Vista rápida de las provincias disponibles</p>
        </div>
        <Link
          href='/provincias'
          className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
        >
          Ver todas
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </Link>
      </div>

      {loading ? (
        <div className='bg-slate-800 rounded-xl p-8 border border-slate-700'>
          <div className='flex items-center justify-center gap-3'>
            <div className='w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin'></div>
            <p className='text-slate-400'>Cargando provincias...</p>
          </div>
        </div>
      ) : (
        <div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
          <div className='flex items-center gap-3 mb-4'>
            <MapPin className='w-5 h-5 text-blue-400' />
            <h3 className='text-lg font-semibold text-white'>
              Total: {provincias.length} provincias
            </h3>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3'>
            {provincias.slice(0, 12).map(provincia => (
              <ProvinciaCard key={provincia.codigo} provincia={provincia} />
            ))}
          </div>
          {provincias.length > 12 && (
            <div className='mt-4 text-center'>
              <Link
                href='/provincias'
                className='text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1'
              >
                Ver las {provincias.length - 12} provincias restantes
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
