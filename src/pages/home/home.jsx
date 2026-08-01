import { useState } from "react";
import { TextBox } from "../../plank-jsx/textBox/textBox";
import { TextField } from "../../plank-jsx/textfield/textField";
import { Btn } from "../../ui/btn/btn";
import { apiClient } from "../../api/api";
import { Timeline } from "./timeline";



export function Home(){

    const [content, setContent] = useState('')

    const handleSubmit = async () => {
        try {

            const userData = JSON.parse(localStorage.getItem('session'))

            console.log(userData)

            const bodyContent = {
                userId: userData.id,
                content: content
            }

            console.log(bodyContent)

            const response = await apiClient.post('/user-timeline/',{body: bodyContent})

            console.log(response)

        } catch (error) {
            console.log(error)
        }

    }
    
    return(
        <>
            <div style={{
                width: "70%",
                margin: "auto",
            }}>

                <div style={{
                    width: "40rem",
                    margin: "auto",
                }}>
                    <div style={{
                        margin: "0.5rem",
                        padding: "0.2rem"
                    }}>
                        <TextBox placeholder={'Content'} content={content} setContent={setContent} />
                    </div>
                    
                    <div style={{
                        margin: "0.5rem",
                        padding: "0.2rem"
                    }}>
                        <Btn title="Publicar" handle={handleSubmit} />
                    </div>
                </div>

                <Timeline />
                
            </div>
            
        </>
    )
}