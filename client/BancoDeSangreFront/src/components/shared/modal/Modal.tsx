import { useState } from "react"
import InputType from "../Form/InputType"
import API from "../../../services/API"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
type user = {
  _id: string;
  email: string;
  name: string;
  role: string;
  hospitalName: string;
  organizationName: string;
}
const Modal = () => {
  const [inventoryType, setInventoryType] = useState("in")
  const [bloodGroup, setBloodGroup] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [donorEmail, setDonorEmail] = useState("")
  const user = useSelector<RootState, user>((state) => state.auth.user)
  const donor: string = "65b08c06a71ba07744d26504"
  const email: string = "blade@blade.com"
  const handleModalSummit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert('Please Provide All Fiedls');
      }
      const { data } = await API.post('/inventory/create-inventory', {
        email,
        organization: user._id,
        donorEmail,
        inventoryType,
        bloodGroup,
        quantity,
        donor
      })
      if (data?.success) {
        alert('New Record Created')
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3">
                Blood Type: &nbsp;
                <div className="form-check ms-3">
                  <input type="radio" name="inRadio"
                    defaultChecked value={"in"}
                    onChange={(event) => setInventoryType(event.target.value)}
                    className="form-check-input" />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input type="radio" name="inRadio"
                    defaultChecked value={"out"}
                    onChange={(event) => setInventoryType(event.target.value)}
                    className="form-check-input" />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>

              </div>
              <select className="form-select mb-4" aria-label="Default select example"
                onChange={(event) => setBloodGroup(event.target.value)}>

                <option selected>Open this select menu</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
              </select>
              <InputType
                id={"donorEmail"}
                name={"donorEmail"}
                labelFor={"donorEmail"}
                labelText={"Donor email"}
                inputType={"donorEmail"}
                value={donorEmail}
                onChange={(event) => setDonorEmail(event.target.value)}
              />

              <InputType
                id={"quantity"}
                name={"quantity"}
                labelFor={"quantity"}
                labelText={"Quantity"}
                inputType={"quantity"}
                value={quantity}
                onChange={(event) => setQuantity(parseFloat(event.target.value))}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleModalSummit}>Submit</button>


            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Modal
