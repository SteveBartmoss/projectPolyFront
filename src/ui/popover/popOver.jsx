import { useState } from 'react'
import './popover.css'

export function PopOver({ children, text }) {

    const [open, setOpen] = useState(false)

    const handelOpen = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <div onClick={handelOpen}>
                <p>{text}</p>
            </div>
            {
                open && (
                    <div>
                        {children}
                    </div>
                )
            }
        </div>
    )
}