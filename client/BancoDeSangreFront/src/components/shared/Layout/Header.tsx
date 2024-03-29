import { BiDonateBlood, BiUserCircle } from 'react-icons/bi'
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'
import { useNavigate,  Link } from 'react-router-dom'

const Header = () => {
  const userName = useSelector<RootState, string>((state) => state.auth.user.name)
  const userRole = useSelector<RootState, string>((state) => state.auth.user.role)
  const hospitalName = useSelector<RootState, string>((state) => state.auth.user.hospitalName)
  const organizationName = useSelector<RootState, string>((state) => state.auth.user.organizationName)
  const navigate = useNavigate();
  // logout handle 
  const handleLogout = () => {
    localStorage.clear()
    alert("Logout Successfully")
    navigate('/login')
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1"><BiDonateBlood color="red" />Blood Bank App</div>
          <ul className='navbar-nav flex-row'>
            <li className='nav-item mx-3'>
              <p className='nav-link'><BiUserCircle />Welcome {userName || hospitalName || organizationName}{" "}
                &nbsp;
                <span className="badge bg-secondary">{userRole} </span>
              </p>
            </li>
            {
              userRole ==="organization"  ? (
                <li className='nav-item mx-3'>
                  <Link to="/analytics" className='nav-link'>
                    Analytics
                  </Link>
                </li>
              ): userRole ==="donor" || userRole ==="hospital" || userRole ==="hospital" ?<li className='nav-item mx-3'>
                  <Link to="/" className='nav-link'>
                    Home
                  </Link>
                </li> : userRole ==="admin" ? <li className='nav-item mx-3'><Link to= "/admin" className='nav-link'>Admin Panel</Link></li> : <li className='nav-item mx-3'><Link to= "/" className='nav-link'>Home</Link></li>
            }
             

            <li className='nav-item mx-3 '>
              <button className='btn btn-danger' onClick={handleLogout} >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
