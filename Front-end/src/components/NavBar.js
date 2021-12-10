import React, {Fragment, useContext} from 'react'
import {Context} from '../index'
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material'
import {CATALOG_ADD_ROUTE, CATALOG_ROUTE, HOME_PAGE, LOGIN_ROUTE} from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {useHistory} from 'react-router-dom'
import {logout} from '../http/userAPI'


const NavBar = observer(() => {
        const {user} = useContext(Context)
        const history = useHistory()

        const logoutClick = async () => {
            try {
                await logout()
                user.setUser({})
                user.setIsAuth(false)
                history.push(HOME_PAGE)
            } catch (e) {
                alert(e.response?.message)
            }
        }

        return (
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static bg-black" style={{boxShadow: '0px 5px 20px black'}}>

                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <a style={{color: 'white', textDecoration: 'none', cursor: 'pointer'}}
                               onClick={() => history.push(HOME_PAGE)}>Pegas Luxury</a>
                        </Typography>
                        <Button color="inherit" style={{
                            position: 'absolute',
                            left: 250
                        }} onClick={() => history.push(CATALOG_ROUTE)}>Catalog</Button>
                        {user._isAuth ?
                            <Fragment>
                                <Button color="inherit" style={{marginRight: '20px'}}
                                        onClick={logoutClick}>LogOut</Button>
                                <Button color="inherit" style={{
                                    position: 'absolute',
                                    left: 370
                                }} onClick={() => history.push(CATALOG_ADD_ROUTE)}>Add car to catalog</Button>
                            </Fragment>

                            :
                            <Button color="inherit" style={{marginRight: '20px'}}
                                    onClick={() => history.push(LOGIN_ROUTE)}>LogIn</Button>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
)

export default NavBar
