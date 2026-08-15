import './ css/postform.css'
import { useState } from "react"
import { Box } from "../../plank-jsx/containers/box"
import { TextField } from "../../plank-jsx/textfield/textField"
import { TextBox } from "../../plank-jsx/textBox/textBox"
import { Btn } from "../../ui/btn/btn"
import { apiClient } from '../../api/api'


export function PostForm() {

    const [formData, setFormData] = useState({
        title: '',
        content: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async () => {
        try {

            const userData = JSON.parse(localStorage.getItem('session'))
            let body = {...formData,userId: userData.id}
            const response = await apiClient.post('/post',{body: body})
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
                <div className='div-form-post'>
                    <div className='title-form-post back-ground-topics'>
                        <TextField
                            nameField="title"
                            textHolder="Titulo"
                            target={formData.title}
                            handleTarget={handleChange}
                        />
                    </div>
                    <div className='content-form-post'>
                        <TextBox
                            nameField="content"
                            placeholder="Content"
                            content={formData.content}
                            setContent={handleChange}
                        />
                    </div>
                    <div className='footer-form-post back-ground-topics'>
                        <Btn
                           handle={handleSubmit}  
                            title="Publicar" 
                        />
                    </div>
                </div>

            </Box>
        </>
    )
}