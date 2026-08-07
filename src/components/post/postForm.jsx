

export function PostForm() {

    const [formData, setFormData] = useState({
        title:'',
        content: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async () => {
        try {

            console.log(formData)

        } catch(error){
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
                        nameField="title"
                        textHolder="Titulo"
                        target={formData.title}
                        handleTarget={handleChange}
                    />
                </div>
                <div>
                    <TextBox 
                        nameField="content"
                        placeholder="Content"
                        content={formData.content}
                        setContent={handleChange}
                    />
                </div>
                <div>
                    <Btn title="Publicar" />
                </div>
            </Box>
        </>
    )
}