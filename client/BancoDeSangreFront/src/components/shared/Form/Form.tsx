import { ChangeEvent, useState } from "react"
import InputType from "./InputType"
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";
const Form = (props: { submitBtn: string, formTitle: string, formType: string }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form onSubmit={(event) => {
        if (props.formType === 'Login') return handleLogin(event, email, password, role)
        else if (props.formType === 'Register') return handleRegister(
          event,
          name,
          role,
          email,
          password,
          phone,
          organizationName,
          hospitalName,
          address,
        )
      }}>
        <h1 className="text-center">{props.formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check ms-2">
            <input type="radio" className="form-check-input"
              name="role"
              id="donorRadio"
              value={"donor"}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setRole(target.value)} />
            <label htmlFor="donorRadio" className="form-check-label">
              Donor
            </label>
          </div>
          <div className="form-check ms-2">
            <input type="radio" className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setRole(target.value)} />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input type="radio" className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setRole(target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input type="radio" className="form-check-input"
              name="role"
              id="organizationRadio"
              value={"organization"}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setRole(target.value)}
            />
            <label htmlFor="organizationRadio" className="form-check-label">
              Organization
            </label>
          </div>
        </div>
        {/*switch*/}
        {(() => {
          switch (true) {
            case props.formType === "Login": {
              return (
                <>
                  <InputType id={"email"} labelText={"Email"} labelFor={"email"} inputType={"email"} name={"email"} value={email}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => setEmail(target.value)} />
                  <InputType id="password" labelText={"Password"} labelFor={"password"} inputType={"password"} name={"password"} value={password}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => setPassword(target.value)} />
                </>
              )
            }
            case props.formType === "Register": {
              return (
                <>


                  {(role === 'admin' || role === 'donor') && (
                    <InputType id="name" labelText={"Name"} labelFor={"forname"} inputType={"name"} name={"name"} value={name}
                      onChange={({ target }: ChangeEvent<HTMLInputElement>) => setName(target.value)} />
                  )}

                  {(role === 'organization') && (<InputType id="organizationName" labelText={"Organization Name"} labelFor={"organizationName"} inputType={"organizatioName"} name={"organizationName"} value={organizationName}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => setOrganizationName(target.value)} />)}

                  {(role === 'hospital') && (<InputType id="hospitalName" labelText={"Hospital Name"} labelFor={"hospitalName"} inputType={"hospitalName"} name={"hospitalName"} value={hospitalName}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => setHospitalName(target.value)} />)}

                  <InputType id="email" labelText={"email"} labelFor={"email"} inputType={"email"} name={"email"} value={email}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => setEmail(target.value)} />
                  <InputType id="password" labelText={"Password"} labelFor={"password"} inputType={"password"} name={"password"} value={password}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => setPassword(target.value)} />
                  <InputType id="adress" labelText={"address"} labelFor={"address"} inputType={"address"} name={"address"} value={address}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => setAddress(target.value)} />
                  <InputType id="phone" labelText={"phone"} labelFor={"for phone"} inputType={"phone"} name={"phone"} value={phone}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => setPhone(target.value)} />
                </>
              )
            }
          }
        })()}

        <div className="d-flex flew-row justify-content-between">
          {props.formType === 'Login' ? (
            <p>
              Not registered yet ? Register
              <Link to='/register'>To Register Page</Link>
            </p>
          ) : (
            <p>
              User already exist ? Please Login
              <Link to='/login'>To Login Page</Link>
            </p>
          )}
          <button className="btn btn-primary mt-4" type="submit">
            {props.submitBtn}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form