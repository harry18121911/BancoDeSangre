import { useSelector } from "react-redux"
import Form from "../../components/shared/Form/Form"
import { RootState } from "../../redux/store"
import Spinner from "../../components/shared/Spinner"
import toast from "react-hot-toast"

const Register =()=> {
  const loading = useSelector<RootState,boolean>((state) => state.auth.loading)
  const error = useSelector<RootState,string>((state) => state.auth.error)

  return (
    <>
    {error && <span>{toast.error(error)}</span>}
  {loading ? (
    <Spinner/>
    ) : (
      <div className="row g-0">
      <div className="col-md-8 form-banner">
        <img src="./assets/images/banner2.jpeg" alt="regiter image" />
      </div>
      <div className="col-md-4 form-container">
        <Form formTitle={"Register"} submitBtn={"Register"} formType={"Register"} />
      </div>
    </div>
  )}
  </>

    
  )
}

export default Register