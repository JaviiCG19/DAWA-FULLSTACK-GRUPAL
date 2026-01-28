from ..Services.user_service import UserService
from ..Services.login_service import LoginService
from ..Services.provincia_service import  ProvinciaService
from ..Services.canton_service import  CantonService



def load_routes(api):
    #agregar el metodo de obtener usuarios
    api.add_resource(UserService, '/user/list')
    api.add_resource(LoginService, '/security/login')
    api.add_resource(ProvinciaService, '/provincia/listar')
    api.add_resource(CantonService, '/cantones/listar')

