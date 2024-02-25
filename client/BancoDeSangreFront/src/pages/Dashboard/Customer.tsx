import { useEffect, useState } from "react"
import Layout from "../../components/shared/Layout/Layout"
import API from "../../services/API"
import moment from "moment"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
type user = {
  _id: string;
  email: string;
  name: string;
  role: string;
  hospitalName: string;
  organizationName: string;
}
const Customer = () => {
  const user = useSelector<RootState, user>((state) => state.auth.user)
  const [dataDonors, setDataDonors] = useState([])
  const getDonors = async () => {
    try {
      const { data } = await API.post('/inventory/get-inventory-hospital', {
        filters:{
          inventoryType: 'out',
          hospital: user?._id,
        },
      })
      console.log(data)
      if (data?.success) {
        setDataDonors(data?.inventory)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDonors();
  }, [])
  return (
    <Layout>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {dataDonors?.map((record: { _id: string, name: string, bloodGroup:string, inventoryType:string, email: string, phone: string, quantity:number, createdAt: string }) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity}</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </Layout>

  )
}

export default Customer
