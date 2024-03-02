import Layout from "../../components/shared/Layout/Layout"
import { useEffect, useState } from "react"
import moment from "moment"
import API from "../../services/API"
const Hospital = () =>{
  const [dataDonors, setDataDonors] = useState([])
  const getDonors = async () => {
    try {
      const { data } = await API.get('/inventory/get-hospitals')
      console.log(data)
      if(data?.success){
        setDataDonors(data?.hospitals)
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
              <th scope="col">Hospital Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Direction</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {dataDonors?.map((record: { _id: string, name: string, hospitalName:string, email: string,phone:string,address:string, createdAt: string}) => (
              <tr key={record._id}>
                <td>{record.hospitalName}</td>
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

export default Hospital
