import { useEffect, useState } from "react"
import Layout from "../../components/shared/Layout/Layout"
import API from "../../services/API"
import moment from "moment";
const AnalyticsPage = () => {
  const [dataAna, setDataAna] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const colors = [
    "#B47B84",
    "#FFE4C9",
    "#BED1CF",
    "#E78895",
    "#CCD3CA",
    "#F5E8DD",
    "#EED3D9", 
    "#B5C0D0", 
  ]


  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get('/analytics/bloodGroup-data');

      if (data?.success) {

        setDataAna(data?.bloodGroupData);

      }
    } catch (error) {
      console.log(error)
    }
  }
  //useEffect
  useEffect(() => {
    getBloodGroupData()
  }, [])

  //todo fix
  const getRecentBloodRecords = async () => {
    try {
      const { data } = await API.get('/inventory/get-recent-inventory')
      if (data?.success) {
        setRecentData(data?.inventory)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRecentBloodRecords();
  }, [])

  return (
    <Layout>
      <div className="d-flex flex-row flex-wrap">
        {dataAna?.map((record: { bloodGroup: string, totalIn: number, totalOut: number, availableBlood: number }, i) => (
          <div className="card m-2 p-1" key={i} style={{ width: '18rem', backgroundColor: `${colors[i]}` }}>
            <div className="card-body">
              <h5 className="card-title bg-light text-dark text-center">{record.bloodGroup}</h5>
              <p className="card-text">
                Total In : <b>{record.totalIn} (ML)</b>
              </p>
              <p className="card-text">
                Total In : <b>{record.totalOut} (ML)</b>
              </p>
            </div>
            <div className="card-footer bg-dark text-light text-center">
              Total Available : <b>{record.availableBlood} (ML)</b>
            </div>
          </div>
        ))}
      </div>
      <div className="container mt-1">
      <h1>Recent blood records</h1>
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
              {recentData?.map((record:{_id:string, bloodGroup:string, inventoryType:string, quantity:number,email:string, createdAt:string})=>(
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
      </div>

    </Layout>
  )
}

export default AnalyticsPage
