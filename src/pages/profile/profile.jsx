
import profileImg from '../../assets/steveA.png'
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
                    margin: "auto",
                }}>
                    <div>
                        <div>
                            <img className='profile-img' src={profileImg} />
                        </div>
                        <div>
                            <h1>Usuario</h1>
                            <span>Nombre</span>
                        </div>
                    </div>
                </Box>
                <Box styles={{
                    width: "70%",
                    margin: "auto",
                }}>
                    <div>
                        <div>
                            Portada
                        </div>
                        <TimelineForm />

                        <Timeline />

                    </div>
                </Box>
            </Box>
        </>
    )
}