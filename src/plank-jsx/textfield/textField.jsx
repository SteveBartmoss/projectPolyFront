import './textfield.css'

export function TextField({nameField,isPass=false,textHolder,target,handleTarget}){
    return(
        <input type={isPass ? "password" : "text"} name={nameField}  className='text-field' placeholder={textHolder} value={target} onChange={handleTarget} />
    )
}