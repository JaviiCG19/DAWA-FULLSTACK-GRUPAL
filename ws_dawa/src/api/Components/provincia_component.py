from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response


class ProvinciaComponent:

    @staticmethod

    def getAllProvincias():
        try:
            result = False
            data = None
            message = None

            sql = """
                SELECT codigo, nombre
                FROM dawa.tb_provincias
                ORDER BY nombre;
            """

            result_db = DataBaseHandle.getRecords(sql, 0)

            if result_db['result']:
                data = result_db['data']
                result = True
            else:
                message = result_db['message']

        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()

        finally:
            return internal_response(result, data, message)