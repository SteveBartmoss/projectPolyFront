import './btn.css'

export function Btn({title,handle}){
    return(
        <button className="btn" onClick={handle}>{title}</button>
    )
}