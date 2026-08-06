
import './profileicon.css'

export function ProfileIcon({url=''}){

    return (
        <>
            <div>
                <img className='img-profile' src={url} />
            </div>
        </>
    )
}