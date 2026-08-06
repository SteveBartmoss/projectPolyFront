import './textbox.css'

export function TextBox({content,setContent,placeholder}){

    return (
        <>
            <textarea 
                className='text-area' 
                placeholder={placeholder}
                value={content} 
                onChange={(event)=>setContent(event.target.value)}>
                </textarea>
        </>
    )
}