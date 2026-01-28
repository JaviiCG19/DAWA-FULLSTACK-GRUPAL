import api from './api';

interface LoginResponse {
  result: boolean;
  message: string;
  data: string;
}

export async function loginService(username: string, password: string): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/api/login', {
    login_user: username,
    login_password: password,
  });
  return response.data;
}
