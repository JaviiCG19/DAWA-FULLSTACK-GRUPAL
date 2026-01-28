from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class CantonComponent:

    @staticmethod
    def listar_por_provincia(codprov):
        try:
            sql = """
                SELECT
                    codigo,
                    nombre
                FROM dawa.tb_cantones
                WHERE codprov = %s
                ORDER BY nombre;
            """

            result_db = DataBaseHandle.getRecords(
                sql, 0, (codprov,)
            )

            if not result_db['result']:
                return internal_response(False, None, "Error al obtener cantones")

            return internal_response(True, result_db['data'], "Exitoso")

        except Exception as err:
            HandleLogs.write_error(err)
            return internal_response(False, None, "Error en Cantones -> " + str(err))
