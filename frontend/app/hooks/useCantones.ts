'use client';
import { useState, useEffect, useCallback } from 'react';
import { listarCantones, Canton } from '@/services/provinciaService';

export const useCantones = (codigoProvincia: string) => {
  const [cantones, setCantones] = useState<Canton[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCantones = useCallback(async () => {
    if (!codigoProvincia) return;

    setLoading(true);
    setError(null);
    try {
      const data = await listarCantones(codigoProvincia);
      setCantones(data);
    } catch {
      setError('Error al cargar los cantones');
    } finally {
      setLoading(false);
    }
  }, [codigoProvincia]);

  useEffect(() => {
    fetchCantones();
  }, [fetchCantones]);

  return {
    cantones,
    loading,
    error,
    refetch: fetchCantones,
  };
};
