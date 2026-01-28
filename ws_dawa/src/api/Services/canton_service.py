from flask_restful import Resource
from ...utils.general.logs import HandleLogs
from ...utils.general.response import (response_error, response_success,
                                       response_not_found, response_unauthorize)
from ..Components.canton_component import CantonComponent
from .middleware import valida_api_token

class CantonService(Resource):

    @staticmethod
    @valida_api_token

    def get(self):
        codprov = request.args.get('codprov')

        if not codprov:
            return internal_response(False, None, "codprov es obligatorio")

        return CantonComponent.listar_por_provincia(codprov)