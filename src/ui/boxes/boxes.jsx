import './boxes.css'


export function DivCol({children}){
    return(
        <div className='div-col'>
            {children}
        </div>
    )
}

export function DivRow({children}){
    return(
        <div className='div-row'>
            {children}
        </div>
    )
}

export function DivPanel({children}){
    return (
        <div className='div-panel'>
            {children}
        </div>
    )
}

export function DivFlex({children,direction='flex-column'}){
    return(
        <div className={`div-flex ${direction}`}>
            {children}
        </div>
    )
}