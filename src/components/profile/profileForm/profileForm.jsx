import { Box } from "../../../plank-jsx/containers/box";
import { TextBox } from "../../../plank-jsx/textBox/textBox";
import { TextField } from "../../../plank-jsx/textfield/textField";
import { Btn } from "../../../ui/btn/btn";


export function ProfileForm() {

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
                    <TextField textHolder="Imagen" />
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