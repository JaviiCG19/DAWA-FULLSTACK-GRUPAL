import axios from "axios";

export async function logIn(username,password){
    const res = await axios.post('/api/login',
        {
            username,
            password
        }
    )
    return res.data
}