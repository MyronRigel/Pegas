import React from 'react'
import {Button, Container} from '@mui/material'
import {LOGIN_ROUTE} from '../utils/consts'

const Catalog = () => {
    return (
        <Container style={{boxShadow: '1px 1px 100px blue', marginTop: '50px', marginBottom: '100px', height: '1000px',
            backgroundColor: '#232621'}}
                   className="d-block justify-content-center" >

            <div style={{color: 'white', padding:'100px'}}>
                <h1 style={{fontSize: '100px', color: 'white'}}>Hello</h1>
                <p style={{fontSize: '30px', paddingTop: '50px'}}>
                    This site contains the most exclusive cars from all over the world
                </p>
                <p style={{fontSize: '30px', paddingTop: '50px'}}>
                    Also you can add a new cat to catalog if you will
                    <Button variant={'contained'} style={{ marginLeft: '10px', color: 'white'}} href={LOGIN_ROUTE}>Login</Button>
                </p>
            </div>
        </Container>
    )
}

export default Catalog
