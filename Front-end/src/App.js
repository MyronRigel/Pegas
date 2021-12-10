import {BrowserRouter} from 'react-router-dom'
import Router from './components/Router'
import NavBar from './components/NavBar'
import {observer} from 'mobx-react-lite'
import {Context} from './index'
import {useContext, useEffect, useState} from 'react'
import {check} from './http/userAPI'
import {Spinner} from 'react-bootstrap'


const App = observer(() => {
        const {user} = useContext(Context)
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        }, [])

        if (loading) {
            return <Spinner animation={'grow'}></Spinner>
        }


        return (
            <BrowserRouter>
                <NavBar/>
                <Router/>
            </BrowserRouter>
        )
    }
)

export default App
