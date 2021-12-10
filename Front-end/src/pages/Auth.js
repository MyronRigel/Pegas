import React, {useContext, useState} from 'react'
import {Button, Card, Container} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Input} from '@mui/material'
import {CATALOG_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from '../utils/consts'
import {useHistory, useLocation} from 'react-router-dom'
import {login, registration} from '../http/userAPI'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'


const Auth = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const location = useLocation()
    const isLogin = location.pathname === REGISTER_ROUTE

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const clickHandler = async () => {
        try {

            if (isLogin) {
                await registration({name, surname, email, password})
                history.push(LOGIN_ROUTE)

            } else {
                await login({email, password})
                history.push(CATALOG_ROUTE)
                user.setUser(user)
                user.setIsAuth(true)
            }

        }catch (e) {
            alert(e.response?.data?.message)
        }



    }
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 300}}>
            {isLogin ?
                <Card style={{width: '600px', color: 'white', boxShadow: '3px 10px 150px yellow'}}>
                    <h1 className="text-center bg-black" style={{boxShadow: '0px 0px 10px black'}}>Register</h1>
                    <Form className="d-flex flex-column">
                        <Input type="text" style={{
                            marginTop: '40px',
                            marginBottom: '40px',
                            marginLeft: '50px',
                            marginRight: '50px'
                        }} placeholder="Name" value={name}
                        onChange={e => setName(e.target.value)}/>
                        <Input type="text" style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}}
                               placeholder="Surname" value={surname}
                        onChange={e => setSurname(e.target.value)}/>
                        <Input type="email" style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}}
                               placeholder="Email" value={email}
                        onChange={e => setEmail(e.target.value)}/>
                        <Input type="password" style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}}
                               placeholder="Password" value={password}
                        onChange={e => setPassword(e.target.value)}/>
                        } />
                    <h6 style={{color: 'black', marginLeft: '50px', marginBottom: '20px'}}>Have account? <a
                        href={LOGIN_ROUTE}>Log In</a></h6>

                    <Button variant={'outline-success'} onClick={clickHandler}>Register</Button>
                </Form>
                </Card>

                :

                <Card style={{width: '600px', color:'white', boxShadow: '1px 1px 150px orange'}}>
                <h1 className='text-center bg-black' style={{boxShadow: '0px 0px 10px black'}}>Login</h1>
                <Form className='d-flex flex-column'>
                <Input type='email' style={{marginTop: '40px', marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}} placeholder='Email'
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <Input type='password' style={{marginBottom: '40px', marginLeft: '50px', marginRight: '50px'}} placeholder='Password'
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <h6 style={{color: 'black', marginLeft: '50px', marginBottom: '20px'}}>No account? <a href={REGISTER_ROUTE}>Create!</a></h6>
                <Button variant={'outline-success'} onClick={clickHandler}>LOGIN</Button>
                </Form>
                </Card>
            }

        </Container>
    )

}
)

export default Auth
