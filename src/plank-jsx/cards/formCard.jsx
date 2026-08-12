import './css/formcard.css'

export function FormCard({title,children,footer}){

    return(
        <div className='div-form-card'>
            <div className='back-ground-topics title-form-card'>
                <h1 className='text-from-card'>{title}</h1>
            </div>
            <div className='content-form-card'>
                {children}
            </div>
            <div className='back-ground-topics footer-form-card'>
                {footer}
            </div>
        </div>
    )
}