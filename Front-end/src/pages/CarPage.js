import React, {Fragment, useEffect, useState} from 'react'
import {Col} from 'react-bootstrap'
import {Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import {observer} from 'mobx-react-lite'
import {useParams} from 'react-router-dom'
import {fetchOneCar} from '../http/carAPI'

const CarPage = observer(() => {
        const {id} = useParams()
        const [car, setCar] = useState({info: []})

        useEffect(() => {
            fetchOneCar(id).then(data => setCar(data))
        }, [])

        return (
            <Col md={12} className="d-flex justify-content-center">
                <Card sx={{maxWidth: 800}} style={{margin: '40px', cursor: 'pointer', boxShadow: '33px 33px 33px black'}}>
                    <CardMedia
                        component="img"
                        height="600"
                        width="800"
                        image={process.env.REACT_APP_API_URL + car.photo}
                        alt={car.model}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {car.model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <br/>
                            <span style={{margin: "5px"}}>Horse power: {car.horsePower}</span>
                            <br/>
                            <span style={{margin: "5px"}}>Year of manufacture: {car.yearOfManufacture}</span>
                            <br/>
                            <span style={{margin: "5px"}}>Type: {car.carType}</span>
                            <br/>
                            <span style={{margin: "5px"}}>0-60: {car.acceleration}</span>
                            <br/>
                            <span style={{margin: "5px"}}>Max speed: {car.maxSpeed}</span>
                            <br/>

                            <br/>
                            Price: <span style={{color: 'green', fontSize: '20px'}}>{car.price} $</span>
                        </Typography>
                        <Fragment>
                            <h5 style={{paddingTop: 40}}>Luxury cars</h5>
                            <p>Most exclusive cars in the world</p>
                        </Fragment>


                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </Col>
        )
    }
)

export default CarPage