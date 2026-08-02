import { useState } from "react";
import { TextBox } from "../../plank-jsx/textBox/textBox";
import { Btn } from "../../ui/btn/btn";
import { Box } from "../../plank-jsx/containers/box";
import './css/timelineform.css'
import { apiClient } from "../../api/api";


export function TimelineForm() {

    const [text, setText] = useState('')

    const handleSubmit = async () => {
        try {

            const userData = JSON.parse(localStorage.getItem('session'))

            console.log(userData)

            const bodyContent = {
                userId: userData.id,
                content: text
            }

            console.log(bodyContent)

            const response = await apiClient.post('/user-timeline/', { body: bodyContent })

            setText('')
            
            console.log(response)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Box styles={{
                width: "40rem",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <div className="div-timeline-form">
                    <div>
                        <p>header</p>
                    </div>
                    <div className="content-timeline-form">
                        <TextBox placeholder={'Content'} content={text} setContent={setText} />
                    </div>
                    <div className="actions-timeline-form">
                        <Btn title="Publicar" handle={handleSubmit} />
                    </div>
                </div>
            </Box>
        </>
    )


}