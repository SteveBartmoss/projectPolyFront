
import profileImg from '../../assets/steveA.png'

export function Profile() {
    return (
        <>
            <div>
                <div>
                    <div>
                        <img src={profileImg} />
                    </div>
                    <div>
                        <h1>Usuario</h1>
                        <span>Nombre</span>
                    </div>
                </div>
                <div>
                    <div>
                        Portada
                    </div>
                    <div>
                        Feed
                    </div>
                </div>
            </div>
        </>
    )
}