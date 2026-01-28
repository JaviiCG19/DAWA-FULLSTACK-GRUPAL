export interface LoginRequest {
  login_user: string;
  login_password: string;
}

export interface MenuItem {
  menu_id: number;
  menu_name: string;
  menu_order: number;
  menu_icon_name: string | null;
  menu_href: string | null;
  menu_url: string | null;
  menu_key: string | null;
  menu_parent_id: number | null;
}

export interface Module {
  mod_id: number;
  mod_name: string;
  mod_description: string | null;
  mod_order: number;
  mod_icon_name: string | null;
  mod_text_name: string | null;
  menu: MenuItem[];
}

export interface Role {
  rol_id: number;
  rol_name: string;
  rol_description: string | null;
  modules: Module[];
}

export interface User {
  user_id: number;
  user_login_id: string;
  user_names: string;
  user_lastnames: string;
  user_locked: boolean;
  user_last_login: string | null;
}

export interface LoginData {
  user: User;
  rols: Role[];
}

export interface ApiResponse<T> {
  result: boolean;
  message: string;
  data: T;
  status_code: number;
}
