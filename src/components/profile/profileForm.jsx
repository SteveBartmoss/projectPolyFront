import { useState } from "react";
import { Box } from "../../plank-jsx/containers/box";
import { TextBox } from "../../plank-jsx/textBox/textBox";
import { TextField } from "../../plank-jsx/textfield/textField";
import { Btn } from "../../ui/btn/btn";
import { apiClient } from "../../api/api";
import { FormCard } from "../../plank-jsx/cards/formCard";


export function ProfileForm() {



    const [formData, setFormData] = useState({
        imgProfile: '',
        textState: '',
        alias: '',
        biografy: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async () => {
        try {

            const userData = JSON.parse(localStorage.getItem('session'))
            let body = { ...formData, userId: userData.id }
            const response = await apiClient.post('/profile-user', { body: body })

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
                <FormCard
                    title={"Configuracion de Perfil"}
                    footer={
                        <Btn
                            title="Guardar"
                            handle={handleSubmit}
                        />
                    }
                >
                    <TextField
                        nameField='imgProfile'
                        textHolder="Imagen"
                        target={formData.imgProfile}
                        handleTarget={handleChange}
                    />

                    <TextField
                            nameField='textState'
                            textHolder="estado"
                            target={formData.textState}
                            handleTarget={handleChange}
                        />

                    <TextField
                            nameField='alias'
                            textHolder="alias"
                            target={formData.alias}
                            handleTarget={handleChange}
                        />

                    <TextBox
                            nameField='biografy'
                            placeholder="Biografia"
                            content={formData.biografy}
                            setContent={handleChange}
                        />

                </FormCard>

            </Box>
        </>
    )
}