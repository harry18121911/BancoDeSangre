
import {BiDonateBlood, BiUserCircle} from 'react-icons/bi'
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'

/*type ContainerProps={
    children:React.ReactNode
}*/



const Header = () => {
    const userName = useSelector<RootState,string>((state) => state.auth.name)
    
  return (
    <div>
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-brand h1"><BiDonateBlood color="red"/>Blood Bank App</div>
                <ul className='navbar-nav flex-row'>
                    <li className='nav-item mx-3'>
                        <p className='nav-link'><BiUserCircle/>Welcome {userName}</p>
                    </li>
                    <li className='nav-item mx-3 '>
                        <button className='btn btn-danger' >
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