export interface Provincia {
  codigo: string;
  nombre: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  status: string;
}
