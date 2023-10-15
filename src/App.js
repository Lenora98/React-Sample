import { useState } from 'react';
import "./App.css"
import FormInput from './component/FormInput';

function App() {
  const [values,setValues]=useState({
    username:"",
    email:"",
    designation:"",
    salary:"",
    
  })
//   console.log(username)
// console.log("re-rendered")
const inputs=[
 { id:1,
  name:"username",
type:"text",
placeholder:"username",
errorMessage:"User name should use 6-13 charcters and no special characters",

label:"username",
pattern:"^[A-Za-z0-9]{3,16}$",
required:true,
},
{ id:2,
  name:"email",
type:"email",
placeholder:"email",
errorMessage:"Invalid email address",
label:"email",
required:true,
},
{ id:3,
  name:"designation",
type:"text",
placeholder:"designation",
errorMessage:"enter valid data",
label:"designation",
pattern:"^[A-Za-z]{}$",
required:true,
},
{ id:4,
  name:"salary",
type:"text",
placeholder:"salary",
errorMessage:"enter valid data",
label:"salary",
pattern:"^[0-9]{}$",
required:true,
}




]


const handelSubmit=(e)=>{
  e.preventDefault();


}
const onChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value});
}
console.log(values);
  return (
    <div className="App">
  <form onSubmit={handelSubmit}>
    <h1>Register</h1>
    {inputs.map((input)=>(
       <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
 
    ))}
   
    <button>Submit</button>
  </form>
    </div>
  );
}

export default App;
