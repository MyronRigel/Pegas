import React, {useContext, useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import CarList from '../components/CarList'
import {observer} from 'mobx-react-lite'
import {fetchCars} from '../http/carAPI'
import {Context} from '../index'

const Catalog = observer(() => {
        const {car} = useContext(Context)

        useEffect(() => {
            fetchCars().then(data => car.setCars(data))
        }, [])

        return (
            <div style={{padding: '20px 100px'}}>
                <Row>
                    <Col md={12}>
                        <CarList/>
                    </Col>
                </Row>
            </div>


        )
    }
)

export default Catalog
