import { useNavigate } from "react-router-dom";
import { DivCol, DivPanel } from "../../ui/boxes/boxes";
import { Btn } from "../../ui/btn/btn";
import { Card, CardBody, CardFooter, CardHeader } from "../../ui/card/card";

import { useState } from "react";
import { apiClient, apiFetch } from "../../api/api";
import { AppLink } from "../../ui/applink/AppLink";
import { TextField } from "../../plank-jsx/textfield/textField";

export function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const hanleSubmit = async () => {
        try {

            const response = await apiClient.post('/user/login',{body: formData})

            if(response.data.token) {

                const sessionData = {
                    id: response.data.id,
                    userName: response.data.user,
                    fullName: `${response.data.firstName} ${response.data.lastName}`,
                    token: response.data.token
                }
                localStorage.setItem('session', JSON.stringify(sessionData))

                navigate('/home')
            }

            console.log(response)

            

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card>
            <CardHeader>
                <h1>Inicia sesion</h1>
            </CardHeader>

            <CardBody>
                <TextField
                    nameField="email"
                    textHolder="Usuario"
                    target={formData.user}
                    handleTarget={handleChange}
                />

                <TextField
                    isPass={true}
                    nameField="password"
                    textHolder="Password"
                    target={formData.password}
                    handleTarget={handleChange}
                />

                <Btn
                    title='Iniciar sesion'
                    handle={hanleSubmit}
                />
            </CardBody>

            <CardFooter>
                <p>No tienes una cuenta, crea una <AppLink url={"/register"}>Aqui</AppLink> </p>
            </CardFooter>
        </Card>

    )
}