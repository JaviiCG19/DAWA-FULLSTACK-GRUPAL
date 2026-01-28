'use client';

import { MapPin, Search } from 'lucide-react';

interface StatsCardsProps {
  totalProvincias: number;
  filteredCount: number;
}

export function StatsCards({ totalProvincias, filteredCount }: StatsCardsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
      <div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center'>
            <MapPin className='w-6 h-6 text-white' />
          </div>
          <div>
            <p className='text-slate-400 text-sm'>Total Provincias</p>
            <p className='text-3xl font-bold text-white'>{totalProvincias}</p>
          </div>
        </div>
      </div>

      <div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center'>
            <Search className='w-6 h-6 text-white' />
          </div>
          <div>
            <p className='text-slate-400 text-sm'>Resultados</p>
            <p className='text-3xl font-bold text-white'>{filteredCount}</p>
          </div>
        </div>
      </div>

      <div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
        <div className='flex items-center gap-4'>
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
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div>
            <p className='text-slate-400 text-sm'>Estado</p>
            <p className='text-xl font-bold text-white'>Activo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
