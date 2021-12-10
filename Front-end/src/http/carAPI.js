import {$host, $authHost} from './index'

export const addCar = async (car) => {
    const {data} = await $authHost.post('http://localhost:5000/api/cars/catalog/add', car)
    return data
}

export const fetchCars = async () => {
    const {data} = await $host.get('http://localhost:5000/api/cars/catalog')
    return data
}

export const fetchOneCar = async (id) => {
    const {data} = await $authHost.get('http://localhost:5000/api/cars/catalog/' + id)
    return data
}
