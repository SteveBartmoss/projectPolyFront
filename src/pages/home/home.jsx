import { useState } from "react";
import { TextBox } from "../../plank-jsx/textBox/textBox";
import { TextField } from "../../plank-jsx/textfield/textField";
import { Btn } from "../../ui/btn/btn";



export function Home(){

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

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
                        <TextField textHolder={'title'} value={title} onChange={setTitle} />
                    </div>
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
                        <Btn title="Publicar" />
                    </div>
                </div>

            </div>
            
        </>
    )
}