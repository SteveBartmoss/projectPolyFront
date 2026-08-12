
import profileImg from '../../assets/steveA.png'
import portadaImg from '../../assets/portada.png'
import { Timeline } from '../../components/timeline/timeline'
import { TimelineForm } from '../../components/timeline/timelineForm'
import { Box } from '../../plank-jsx/containers/box'
import './profile.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiClient } from '../../api/api'

export function Profile() {

    const { id } = useParams()

    const [profile, setProfile] = useState(null)

    const getProfile = async () => {

        try {

            const response = await apiClient.get(`/profile-user/${id}`)
            
            setProfile(response.data)
            console.log(response)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getProfile()
    },[])

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
                        <span>{profile?.alias}</span>
                    </div>
                    <div>
                        <p>{profile?.biografy}</p>
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