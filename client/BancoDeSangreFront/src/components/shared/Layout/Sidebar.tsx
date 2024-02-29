import { Link, useLocation } from "react-router-dom"
import "../../../styles/Layout.css"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
type user = {
  _id: string;
  email: string;
  name: string;
  role: string;
  hospitalName: string;
  organizationName: string;
}
const Sidebar = () => {
  const location = useLocation();
  //GET USER STATE
  const user = useSelector<RootState, user>((state) => state.auth.user)
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organization" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventory</Link>
              </div>
              <div
                className={`menu-item ${location.pathname === "/donor" && "active"
                  }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donor">Donor</Link>
              </div>
              <div
                className={`menu-item ${location.pathname === "/hospital" && "active"
                  }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div>
            </>
          )}
          {user?.role === "donor" && (
            <div
              className={`menu-item ${location.pathname === "/organization" && "active"
                }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/organization">Organization</Link>
            </div>
          )}
          {user?.role === "donor" && (
            <div
              className={`menu-item ${location.pathname === "/donation" && "active"
                }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/donation">Donation</Link>
            </div>
          )}

          {user?.role === "hospital" && (
            <div
              className={`menu-item ${location.pathname === "/customer" && "active"
                }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/customer">Customer</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar
