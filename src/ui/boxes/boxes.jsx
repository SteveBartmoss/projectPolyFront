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