import { NavLink, useNavigate } from 'react-router-dom'
import { Btn } from '../ui/btn/btn'
import { PopOver } from '../ui/popover/popOver'
import './topbar.css'
import imgIcon from '../assets/steveA.png'
import { ProfileIcon } from '../ui/profileIcon/profileIcon'

export function TopBar() {

    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.removeItem('session')
        navigate('/login')
        
    }

    const userData = JSON.parse(localStorage.getItem('session'))

    return (
        <div className='div-topbar'>
            <NavLink className='title-brand' to='/home'>The pipe</NavLink>
            <PopOver head={<ProfileIcon url={imgIcon} />}>
                <NavLink to={`/profile/${userData.id}`} >Perfil</NavLink>
                <NavLink to='/config-profile'>Configuracion</NavLink>
                <p onClick={handleLogout}>
                    Salir
                </p>
            </PopOver>
        </div>
    )
}