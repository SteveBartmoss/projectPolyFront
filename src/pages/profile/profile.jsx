
import profileImg from '../../assets/steveA.png'
import portadaImg from '../../assets/portada.png'
import { Timeline } from '../../components/timeline/timeline'
import { TimelineForm } from '../../components/timeline/timelineForm'
import { Box } from '../../plank-jsx/containers/box'
import './profile.css'

export function Profile() {
    return (
        <>
            <Box styles={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Box styles={{
                    width: "20%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <img className='profile-img' src={profileImg} />
                    <div>
                        <h1>Usuario</h1>
                        <span>Nombre</span>
                    </div>
                </Box>
                <Box styles={{
                    width: "70%",
                    margin: "auto",
                }}>
                    
                    <div className="profile-portada-container">
                        <img
                            className="profile-portada"
                            src={portadaImg}
                            alt="Portada"
                        />
                    </div>

                    <TimelineForm />

                    <Timeline />

                </Box>
            </Box>
        </>
    )
}