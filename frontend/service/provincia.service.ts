import { API_URL } from '../utils/api';
import { ApiResponse, Provincia } from '../types/provincia.types';

export async function getProvinciasService(): Promise<ApiResponse<Provincia[]>> {
  const response = await fetch(`${API_URL}/api/provincia/listar`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}
