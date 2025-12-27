import { useState } from "react";
import { DivCol } from "../../ui/boxes/boxes";
import { Card, CardBody, CardFooter, CardHeader } from "../../ui/card/card";
import { TextField } from "../../ui/textfield/textField";
import { Btn } from "../../ui/btn/btn";
import { apiFetch } from "../../api/api";
import { AppLink } from "../../ui/applink/AppLink";


export function Register() {

    const [formData, setFormData] = useState({
        user: "",
        password: "",
        firstName: "",
        lastName: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async () => {
        try {

            const response = await apiFetch('users', {
                method: 'POST',
                body: JSON.stringify(formData)
            })

            let data = await response.json()

            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Card>

                <CardHeader>
                    <h1>Crea tu cuenta hoy</h1>
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

                    <TextField
                        nameField="firstName"
                        textHolder="Nombre"
                        target={formData.firstName}
                        handleTarget={handleChange}
                    />

                    <TextField
                        nameField="lastName"
                        textHolder="Apellido"
                        target={formData.lastName}
                        handleTarget={handleChange}
                    />

                    <Btn
                        title='Crear cuenta'
                        handle={handleSubmit}
                    />
                </CardBody>

                <CardFooter>
                    <p>Ya tienes una cuenta, inicia sesion <AppLink url={"/login"}>Aqui</AppLink> </p>
                </CardFooter>
            </Card>
        </>
    )
}