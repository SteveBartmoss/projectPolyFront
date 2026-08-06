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

    return (
        <div className='div-topbar'>
            <NavLink className='title-brand' to='/home'>The pipe</NavLink>
            <PopOver head={<ProfileIcon url={imgIcon} />}>
                <NavLink to='/profile' >Perfil</NavLink>
                <p onClick={handleLogout}>
                    Salir
                </p>
            </PopOver>
        </div>
    )
}