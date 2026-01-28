import api from './api';

export interface Provincia {
  codigo: string;
  nombre: string;
}

export interface Canton {
  codigo: string;
  nombre: string;
  provincia_codigo: string;
}

interface ApiResponse<T> {
  result: boolean;
  message: string;
  data: T;
}

export async function listarProvincias(): Promise<Provincia[]> {
  const response = await api.get<ApiResponse<Provincia[]>>('/api/provincia/listar');
  return response.data.data;
}

export async function listarCantones(codigoProvincia: string): Promise<Canton[]> {
  const response = await api.get<ApiResponse<Canton[]>>(
    `/api/cantones/listar?codprov=${codigoProvincia}`,
  );
  return response.data.data;
}
