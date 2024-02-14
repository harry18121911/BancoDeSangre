import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import Spinner from "../components/shared/Spinner"
import toast from "react-hot-toast"
import Layout from "../components/shared/Layout/Layout"
import Modal from "../components/shared/modal/Modal"
import "bootstrap/dist/js/bootstrap.min.js";
const HomePage = () => {
  const loading = useSelector<RootState,boolean>((state) => state.auth.loading)
  const error = useSelector<RootState,string>((state) => state.auth.error)
  return (
    
<Layout>
    {error && <span>{toast.error(error)}</span>}
  {loading ? (
    <Spinner/>
    ) : (
          <> 
              <h4
                className="ms-4"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{cursor:"pointer"}}>
                <i className="fa-solid fa-plus text-success py-4"></i>
                Add Inventory
              </h4>

          <Modal/>
          </>
        )} 
              </Layout>
  )
}

export default HomePage
