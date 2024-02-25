
import Form from "../../components/shared/Form/Form"
import {useSelector} from 'react-redux'
import { RootState } from "../../redux/store"
import Spinner from '../../components/shared/Spinner';
import toast from "react-hot-toast";

const Login = () => {
  const loading = useSelector<RootState,boolean>((state) => state.auth.loading)
  const error = useSelector<RootState,string>((state) => state.auth.error)
  return(
    <>
      {error && <span>{toast.error(error)}</span>}
    {loading ? (
      <Spinner/>
      ) : (
      <div className="row g-0">
      <div className="col-md-8 form-banner">
        <img src="./assets/images/banner1.png" alt="loginImage" />
      </div>
      <div className="col-md-4 form-container">
        <Form submitBtn = "Login"
              formTitle = "Login Page"
              formType={"Login"}/>
      </div>
    </div>
    )}
    </>
  );
};

export default Login
