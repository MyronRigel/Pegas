import React, {useContext, useState} from 'react'
import {Container, Input} from '@mui/material'
import {Button, Card, Form} from 'react-bootstrap'
import {CATALOG_ROUTE} from '../utils/consts'
import {addCar} from '../http/carAPI'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {useHistory} from 'react-router-dom'


const AddPanel = observer(() => {
    const {car} = useContext(Context)
    const history = useHistory()


    const [model, setModel] = useState('')
    const [horsePower, setHorsePower] = useState('')
    const [yearOfManufacture, setYearOfManufacture] = useState('')
    const [price, setPrice] = useState('')
    const [carType, setCarType] = useState('')
    const [acceleration, setAcceleration] = useState('')
    const [maxSpeed, setMaxSpeed] = useState('')
    const [photo, setPhoto] = useState(null)

    const selectFile = e => {
        setPhoto(e.target.files[0])
    }

    const createNewCarr = async () => {
            const formData = new FormData()
            formData.append('model', model)
            formData.append('price', `${price}`)
            formData.append('horsePower', `${horsePower}`)
            formData.append('carType', carType)
            formData.append('acceleration', `${acceleration}`)
            formData.append('maxSpeed', `${maxSpeed}`)
            formData.append('yearOfManufacture', `${yearOfManufacture}`)
            formData.append('photo', photo)
            addCar(formData).then(data => history.push(CATALOG_ROUTE)).catch(e => {
                alert(e.response?.data?.message)
            })


    }


    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 100}}>
            <Card style={{width: '600px', color: 'white', boxShadow: '1px 1px 150px green'}}>
                <h1 className="text-center bg-black" style={{boxShadow: '0px 0px 10px black'}}>Add new car to
                    catalog</h1>
                <Form className="d-flex flex-column" action="http://localhost:5000/api/catalog/add" method="post">
                    <Input type="text" style={{
                        marginTop: '40px',
                        marginBottom: '40px',
                        marginLeft: '50px',
                        marginRight: '50px'
                    }} placeholder="Model"
                           value={model}
                           onChange={e => setModel(e.target.value)}/>

                    <Input type="number" style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}}
                           placeholder="Horse power"
                           value={horsePower}
                           onChange={e => setHorsePower(e.target.value)}/>

                    <Input type="number" style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}}
                           placeholder="Year of manufacture"
                           onChange={e => setYearOfManufacture(e.target.value)}
                    value={yearOfManufacture}/>

                    <Input type="text" style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}}
                           placeholder="Car type"
                           onChange={e => setCarType(e.target.value)}
                    value={carType}/>

                    <Input type="number" style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}}
                           placeholder="Acceleration 0-60 miles"
                           onChange={e => setAcceleration(e.target.value)}
                    value={acceleration}/>

                    <Input type="number" style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}}
                           placeholder="Max speed"
                           onChange={e => setMaxSpeed(e.target.value)}
                           value={maxSpeed}/>

                    <Input style={{marginBottom: '20px', marginLeft: '50px', marginRight: '50px'}}
                           placeholder="Price"
                           onChange={e => setPrice(e.target.value)}
                           value={price}/>
                    } />
                    } />
                    <div style={{marginBottom: '20px', marginLeft: '50px', marginRight: '50px'}}>
                        <label style={{color: 'black', marginRight: '20px', textDecoration: 'underline'}}>Car
                            photo</label>
                        <input style={{color: 'black', marginBottom: '20px'}} type="file"
                               onChange={selectFile}></input>
                    </div>


                    <Button variant={'outline-success'} active={true} onClick={createNewCarr}>Add to catalog</Button>
                </Form>
            </Card>
        </Container>
    )
})

export default AddPanel


