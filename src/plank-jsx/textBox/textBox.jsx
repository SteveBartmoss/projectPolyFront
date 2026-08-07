import './textbox.css'

export function TextBox({nameField,content,setContent,placeholder}){

    return (
        <>
            <textarea 
                className='text-area' 
                name={nameField}
                placeholder={placeholder}
                value={content} 
                onChange={(event)=>setContent(event.target.value)}>
                </textarea>
        </>
    )
}