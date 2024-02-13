import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import Spinner from "../components/shared/Spinner"
import toast from "react-hot-toast"
import Layout from "../components/shared/Layout/Layout"

const HomePage = () => {
  const loading = useSelector<RootState,boolean>((state) => state.auth.loading)
  const error = useSelector<RootState,string>((state) => state.auth.error)
  return (
    
<Layout>
    {error && <span>{toast.error(error)}</span>}
  {loading ? (
    <Spinner/>
    ) : (
      <h1>HomePage</h1>
  )} 
  </Layout>
  )
}

export default HomePage