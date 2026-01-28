from flask_restful import Resource
from ..Components.provincia_component import ProvinciaComponent
from ...utils.general.logs import HandleLogs
from ...utils.general.response import (response_error, response_success,
                                       response_not_found, response_unauthorize)
from .middleware import valida_api_token


class ProvinciaService(Resource):

    @staticmethod
    @valida_api_token
    def get():
        try:
            HandleLogs.write_log("Servicio listar provincias")

            resultado = ProvinciaComponent.getAllProvincias()

            if resultado['result']:
                return response_success(resultado['data'])
            else:
                return response_error(resultado['message'])

        except Exception as err:
            HandleLogs.write_error(err)
            return response_error(err.__str__())