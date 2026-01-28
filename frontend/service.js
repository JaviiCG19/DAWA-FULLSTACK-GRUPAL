import axios from "axios"

function obtener(ruta) {
    return axios.get(ruta).then(
        (res) => { return res },
        (err) => { return { 'error': error } }
    )
}

function listar_provincia() { return obtener('/api/provincia') }
function listar_cant(provincia) { return obtener('/api/cantones/listar/' + provincia)  }

