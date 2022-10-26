import React from "react"


function CallBackEvent(){
const [text,setText]=React.useState ('')

const handleChange=(event)=>{
    setText(event.target.value)
}

    return(
        <div>
            <MyInput  inputValue= {text} onInputChange={handleChange}/>
            {text}
        </div>
    )
}


function MyInput  ({inputValue,onInputChange}){
    return(
        <div>
            <input type='text' onChange={onInputChange}/>
        </div>
    )
}
export default CallBackEvent