import { useEffect, useState } from "react"
import Layout from "../../components/shared/Layout/Layout"
import API from "../../services/API"
import moment from "moment"
const OrgList = () => {
  const [dataDonors, setDataDonors] = useState([])
  const getDonors = async () => {
    try {
      const { data } = await API.get('/admin/organization-list')
      console.log(data)
      if (data?.success) {
        setDataDonors(data?.organizationsData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDonors();
  }, [])
  const handleDelete = async (id: string) => {
    try {
      let answer = window.prompt('Are you sure you want to delete this organization?', "Sure")
      if (!answer) return
      const { data } = await API.delete(`admin/delete-donor/${id}`)
      alert(data?.message)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Organization Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Direction</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {dataDonors?.map((record: { _id: string, name: string, organizationName: string, email: string, phone: string, address: string, createdAt: string }) => (
              <tr key={record._id}>
                <td>{record.organizationName}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
                <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                <td><div className="btn btn-danger" onClick={() => handleDelete(record._id)}>DELETE</div></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </Layout>
  )
}







export default OrgList; 
