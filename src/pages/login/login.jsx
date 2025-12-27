import { useNavigate } from "react-router-dom";
import { DivCol, DivPanel } from "../../ui/boxes/boxes";
import { Btn } from "../../ui/btn/btn";
import { Card, CardBody, CardFooter, CardHeader } from "../../ui/card/card";
import { TextField } from "../../ui/textfield/textField";
import { useState } from "react";
import { apiFetch } from "../../api/api";
import { AppLink } from "../../ui/applink/AppLink";

export function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        user: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const hanleSubmit = async () => {
        try {

            const response = await apiFetch('users/login', {
                method: 'POST',
                body: JSON.stringify(formData)
            })

            let data = await response.json()

            if (data.token) {

                const sessionData = {
                    id: data.id,
                    userName: data.user,
                    fullName: `${data.firstName} ${data.lastName}`,
                    token: data.token
                }
                localStorage.setItem('session', JSON.stringify(sessionData))

                navigate('/home')

            }

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
                    nameField="user"
                    textHolder="Usuario"
                    target={formData.user}
                    handleTarget={handleChange}
                />

                <TextField
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