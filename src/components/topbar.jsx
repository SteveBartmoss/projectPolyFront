import { NavLink, useNavigate } from 'react-router-dom'
import { Btn } from '../ui/btn/btn'
import { PopOver } from '../ui/popover/popOver'
import './topbar.css'

export function TopBar() {

    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.removeItem('session')
        navigate('/login')
    }

    return (
        <div className='div-topbar'>
            <h1>The pipe</h1>
            <PopOver text={'user img'}>
                <NavLink to='/profile' >Perfil</NavLink>
                <Btn 
                    title='Salir'
                    handle={handleLogout}
                />
            </PopOver>
        </div>
    )
}