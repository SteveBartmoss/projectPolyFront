import { useState } from "react";
import { DivCol } from "../../ui/boxes/boxes";
import { Card } from "../../ui/card/card";
import { TextField } from "../../ui/textfield/textField";
import { Btn } from "../../ui/btn/btn";


export function Register(){

    const [formData, setFormData] = useState({
        user: "",
		password: "",
		firstName: "",
		lastName: "",
    })

    const handleChange = (event) => {
        const {name,value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async () => {
        try{

            const response = await apiFetch('users',{
                method: 'POST',
                body: JSON.stringify(formData)
            })

            let data = await response.json()
            
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
            <DivCol>
                <Card>
                    <h1>Crea tu cuenta hoy</h1>

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
                        <TextField
                            nameField="firstName" 
                            textHolder="Nombre"
                            target={formData.firstName}
                            handleTarget={handleChange} 
                        />
                    </DivCol>
                    
                    <DivCol>
                        <TextField 
                            nameField="lastName" 
                            textHolder="Apellido"
                            target={formData.lastName}
                            handleTarget={handleChange}  
                        />
                    </DivCol>

                    <DivCol>
                        <Btn
                            title='Crear cuenta'
                        />
                    </DivCol>
                </Card>
            </DivCol>
        </>
    )
}