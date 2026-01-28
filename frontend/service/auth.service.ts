import { API_URL } from '../utils/api';
import { LoginRequest, ApiResponse, LoginData } from '../types/auth.types';

export async function loginService(payload: LoginRequest): Promise<ApiResponse<LoginData>> {
  const response = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}
