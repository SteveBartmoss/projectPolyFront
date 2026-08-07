import { Box } from "../../../plank-jsx/containers/box";
import { TextBox } from "../../../plank-jsx/textBox/textBox";
import { TextField } from "../../../plank-jsx/textfield/textField";
import { Btn } from "../../../ui/btn/btn";


export function ProfileForm() {

    const [formData, setFormData] = useState({
        imgProfile: '',
        textState: '',
        alias: '',
        biografy: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async () => {
        try{

            console.log(formData)

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <Box styles={{
                width: "40rem",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <div>
                    <TextField 
                        nameField='imgProfile' 
                        textHolder="Imagen" 
                        target={formData.imgProfile}
                        handleTarget={handleChange}
                    />
                </div>
                <div>
                    <TextField textHolder="estado" />
                </div>
                <div>
                    <TextField textHolder="alias" />
                </div>
                <div>
                    <TextBox placeholder="Biografia" />
                </div>
                <div>
                    <Btn title="Guardar" />
                </div>
            </Box>
        </>
    )
}