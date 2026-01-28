'use client';
import { useState, useEffect, useCallback } from 'react';
import { listarProvincias, Provincia } from '@/services/provinciaService';

export const useProvincias = () => {
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProvincias = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await listarProvincias();
      setProvincias(data);
    } catch {
      setError('Error al cargar las provincias');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProvincias();
  }, [fetchProvincias]);

  return {
    provincias,
    loading,
    error,
    refetch: fetchProvincias,
  };
};
