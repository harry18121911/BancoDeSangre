import Layout from "../../components/shared/Layout/Layout"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import API from "../../services/API"
import moment from "moment"
import { RootState } from "../../redux/store"
type user = {
  _id: string;
  email: string;
  name: string;
  role: string;
  hospitalName: string;
  organizationName: string;
}
const Organization = () => {
  const user = useSelector<RootState, user>((state) => state.auth.user)
  const [dataDonors, setDataDonors] = useState([])
  const getOrganization = async () => {
    try {
      if (user?.role === 'donor') {
        const { data } = await API.get('/inventory/get-organizations')
        console.log(data)
        if (data?.success) {
          setDataDonors(data?.organizations)
        }
      }
      if (user?.role === 'hospital') {
        const { data } = await API.get('/inventory/get-organizations-for-hospital')
        console.log(data)
        if (data?.success) {
          setDataDonors(data?.organizations)
        }
      }

    } catch (error) {
      console.log(error)
    }
 }
    useEffect(() => {
      getOrganization();
    }, [user])
  
    return (
      <Layout>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Direction</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {dataDonors?.map((record: { _id: string, organizationName: string, email: string, phone: string, address: string, createdAt: string }) => (
                <tr key={record._id}>
                  <td>{record.organizationName}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.address}</td>
                  <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </Layout>
    )
  }



export default Organization
