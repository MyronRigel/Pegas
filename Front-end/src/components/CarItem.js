import React from 'react'
import {CardImg, Col} from 'react-bootstrap'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import {useHistory} from 'react-router-dom'
import {CAR_PAGE_ROUTE} from '../utils/consts'

const CarItem = ({car}) => {
    const history = useHistory()
    return (
        <Col md={4} onClick={() => {
            history.push(CAR_PAGE_ROUTE + '/' + car._id)
        }}>
            <Card sx={{maxWidth: 600}} style={{margin: '40px', cursor: 'pointer', boxShadow: '13px 13px 13px black'}}>
                <CardMedia
                    component="img"
                    height="300"
                    width="600"
                    image={process.env.REACT_APP_API_URL + car.photo}
                    alt={car.model}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {car.model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Horse power: {car.horsePower}
                        <br/>
                        Year of manufacture: {car.yearOfManufacture}
                        <br/>
                        Price: <span style={{color:'green', fontSize: '20px'}}>{car.price} $</span>
                    </Typography>

                </CardContent>
                <Button variant="outlined" color="success" style={{marginLeft: '15px'}}>Click for more</Button>
                <CardActions>
                </CardActions>
            </Card>
        </Col>
    )
}

export default CarItem
