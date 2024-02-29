import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import Spinner from "../components/shared/Spinner"
import toast from "react-hot-toast"
import Layout from "../components/shared/Layout/Layout"
import Modal from "../components/shared/modal/Modal"
import "bootstrap/dist/js/bootstrap.min.js";
import API from "../services/API"
import moment from 'moment'
const HomePage = () => {
  const loading = useSelector<RootState, boolean>((state) => state.auth.loading)
  const error = useSelector<RootState, string>((state) => state.auth.error)
  const [data, setData] = useState([])

  //get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get('/inventory/get-inventory')
      if (data?.success) {
        setData(data?.inventory)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBloodRecords();
  }, [])
  return (

    <Layout>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
          <h4
            className="ms-4 w-25"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-plus text-success py-4"></i>
            Add Inventory
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Donor Email</th>
                <th scope="col">Time & Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record:{_id:string, bloodGroup:string, inventoryType:string, quantity:number,email:string, createdAt:string})=>(
                <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} ML</td>         
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                </tr>
              ))}
              
            </tbody>
          </table>


          <Modal />
          </div>
        </>
      )}
    </Layout>
  )
}

export default HomePage
