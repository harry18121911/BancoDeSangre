import { ChangeEvent, useState } from "react"
import InputType from "./InputType"

const Form = (props:{submitBtn:string, formTitle:string}) => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
 

  return (
    <div>
      <form >
        <h1 className="text-center">{props.formTitle}</h1>
        <hr/>
        <InputType labelText={"email"} labelFor={"for email"} inputType={"email"} name={"email"} value={email} 
        onChange={({target}:ChangeEvent<HTMLInputElement>) => setEmail(target.value)}/>
        <InputType labelText={"password"} labelFor={"for password"} inputType={"password"} name={"password"} value={password} 
        onChange={({target}:ChangeEvent<HTMLInputElement>) => setPassword(target.value)}/>

        <div>
          <button className="btn btn-primary mt-4" type="submit">
            {props.submitBtn}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form