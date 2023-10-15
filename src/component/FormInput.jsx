
import { useState } from "react";
import "./FormInput.css";
const FormInput=(props)=>{
    const {label,errorMessage,onChange,id,...inputProps}=props;
    const [focused,setFocused]=useState(false);
    const handelFocus=(e)=>{
        setFocused(true);
    }
    return(
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handelFocus} focused={focused.toString()}/>
            <span>{errorMessage}</span>

            {/* <input name={props.name} placeholder={props.placeholder} /> */}
            {/* onChange={e=>props.setUsername(e.target.value)} */}

        </div>
    )
}
export default FormInput