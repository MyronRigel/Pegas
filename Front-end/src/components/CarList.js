import React, {useContext} from 'react'
import {Context} from '../index'
import {Row} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import CarItem from './CarItem'

const CarList = observer(() => {
    const {car} = useContext(Context)
    return (
        <Row className='d-flex'>
            {car.cars.map(car =>
                <CarItem key={car._id} car={car}/>
            )}
        </Row>
    )
})

export default CarList
