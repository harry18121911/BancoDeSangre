import { useEffect, useState } from "react"
import Layout from "../../components/shared/Layout/Layout"
import moment from "moment"
import API from "../../services/API"
const Donor = () => {
  const [dataDonors, setDataDonors] = useState([])
  const getDonors = async () => {
    try {
      const { data } = await API.get('/inventory/get-donors')
      console.log(data)
      if(data?.success){
        setDataDonors(data?.donors)
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
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {dataDonors?.map((record: { _id: string, name: string, organizationName:string, email: string,phone:string, createdAt: string}) => (
              <tr key={record._id}>
                <td>{record.name || record.organizationName + "(ORG)"}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Donor
