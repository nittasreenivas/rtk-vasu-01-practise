import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import { logout } from '../features/User/userSlice'
const Navbar = () => {
   const {userDetails} =   useSelector((state) => state.user)
   console.log("userDetails:",userDetails)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const handleLogout = () => {
      dispatch(logout())
      navigate('/login')
   }
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
          
        {
          userDetails === null && (
            <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          )
        }

        {
          userDetails !== null && (
            <>
            <li className="nav-item">
          <Link className="nav-link" to="/dummy">Dummy</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/fake">Fake</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/employees">Employees</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/billing">Billing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/newfooditem">NewFoodItem</Link>
        </li>
        <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <span className="nav-link">Welcome, {userDetails.lastname}</span>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-info" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
          </>
          )
        }
        
        
          
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar