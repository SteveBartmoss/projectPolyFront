import './card.css'

export function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    )
}

export function CardHeader({children}){
    return (
        <div className="card-header">
            {children}
        </div>
    )
}