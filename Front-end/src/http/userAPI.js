import {$host, $authHost} from './index'
import jwtDecode from 'jwt-decode'

export const registration = async (user) => {
    const {data} = await $host.post('http://localhost:5000/api/users/register', {...user})
    return {data}
}

export const login = async (user) => {
    const {data} = await $host.post('http://localhost:5000/api/users/login', {...user})
    localStorage.setItem('access_token', data.access_token)
    return jwtDecode(data.access_token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/users/auth')
    localStorage.setItem('access_token', data.access_token)
    return jwtDecode(data.access_token)
}

export const logout = async () => {
    const {data} = await $authHost.post('api/users/logout')
    localStorage.removeItem('access_token')
}