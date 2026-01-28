import axios from "axios"

function unwrap_promise(promise) {
    return promise.then(
        (res) => { return res },
        (err) => { return { error: err } }
    )
}

function listar_provincia() { 
    return unwrap_promise(axios.get('/provincia/listar'))
}

function listar_cantones(codprov) {
    return unwrap_promise(axios.get('/cantones/listar', { params: { codprov: codprov } }))
}
