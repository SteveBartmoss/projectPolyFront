import { useNavigate } from "react-router-dom";
import { DivCol } from "../../ui/boxes/boxes";
import { Btn } from "../../ui/btn/btn";
import { Card } from "../../ui/card/card";
import { TextField } from "../../ui/textfield/textField";
import { useState } from "react";

export function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        user: '',
        password: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    return (
        <DivCol>
            <Card>
                <h1>Inicia sesion</h1>

                <DivCol>
                    <TextField 
                        nameField="user" 
                        textHolder="Usuario"
                        target={formData.user}
                        handleTarget={handleChange} 
                    />
                </DivCol>

                <DivCol>
                    <TextField 
                        nameField="password"
                        textHolder="Password"
                        target={formData.password}
                        handleTarget={handleChange} 
                    />
                </DivCol>
                
                <DivCol>
                    <Btn title='Iniciar sesion' />
                </DivCol>

            </Card>
        </DivCol>
    )
}