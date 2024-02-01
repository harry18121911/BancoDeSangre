import Form from "../../components/shared/Form/Form"

const Login = () => {
  return (
    <div className="row">
      <div className="col-md-8 form-banner">
        <img src="./assets/images/banner1.png" alt="loginImage" />
      </div>
      <div className="col-md-4 form-container">
        <Form submitBtn = "Login"
              formTitle = "Login Page "/>
      </div>
    </div>
  )
}

export default Login