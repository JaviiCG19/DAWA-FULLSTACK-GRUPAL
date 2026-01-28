'use client';

import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface ProvinciaHeaderProps {
  loading: boolean;
  totalProvincias: number;
  onRefresh: () => void;
}

export function ProvinciaHeader({ loading, totalProvincias, onRefresh }: ProvinciaHeaderProps) {
  return (
    <div className='mb-8'>
      <Link
        href='/dashboard'
        className='inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4'
      >
        <ArrowLeft className='w-5 h-5' />
        Volver al Dashboard
      </Link>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-bold text-white mb-2'>Provincias del Ecuador</h1>
          <p className='text-slate-400'>
            Gestión y consulta de las {totalProvincias} provincias del país
          </p>
        </div>
        <button
          onClick={onRefresh}
          disabled={loading}
          className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white rounded-lg transition-colors'
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          Actualizar
        </button>
      </div>
    </div>
  );
}
