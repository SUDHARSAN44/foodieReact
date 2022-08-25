import React, { useState } from 'react'
import "./../styles/textInput.css"

const TextInput = (props)=>{

    const [value,onChange] = useState("")

    return(
        <div className='form-field'>
            <input type="text" clasName="username" onChange={(event)=>onChange(event.target.value)} placeholder={props.placeholder} value={value}></input>
        </div>
    )

}

export default TextInput
