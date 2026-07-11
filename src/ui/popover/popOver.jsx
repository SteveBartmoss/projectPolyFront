import { useEffect, useRef, useState } from 'react'
import './popover.css'

export function PopOver({ children, head=null }) {

    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)

    const handelOpen = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(()=> {

        const handleCliclOutside = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target)){
                handleClose()
            }
        }

        if(open) {
            document.addEventListener('mousedown',handleCliclOutside)
        }

        return () => {
            document.removeEventListener('mousedown',handleCliclOutside)
        }
        
    },[open])

    return (
        <div className='display-menu' ref={menuRef}>
            <div onClick={handelOpen}>
                {head}
            </div>
            {
                open && (
                    <div className='container-list'>
                        {children}
                    </div>
                )
            }
        </div>
    )
}