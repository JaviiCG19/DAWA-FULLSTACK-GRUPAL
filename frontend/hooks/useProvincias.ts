'use client';

import { useState, useEffect } from 'react';
import { getProvinciasService } from '../service/provincia.service';
import { Provincia } from '../types/provincia.types';

interface UseProvinciasReturn {
  provincias: Provincia[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProvincias(): UseProvinciasReturn {
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProvincias = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getProvinciasService();

      if (response.success) {
        setProvincias(response.data);
      } else {
        setError(response.message || 'Error al cargar las provincias');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido al cargar las provincias');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProvincias();
  }, []);

  return {
    provincias,
    loading,
    error,
    refetch: fetchProvincias,
  };
}
