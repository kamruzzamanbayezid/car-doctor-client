
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/assets/icons/logo.svg';
import { useContext } from 'react';
import { AuthContent } from '../../../Provider/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

      const { user, logOut } = useContext(AuthContent);

      // Logout 
      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        toast.success('Logout successfully')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      const links = <div className='flex items-center gap-5'>
            <li>
                  <NavLink
                        to="/"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF3811] text-lg font-semibold border-b-2 border-[#FF3811]" : "text-lg font-semibold text-[#444]"
                        }
                  >
                        Home
                  </NavLink>
            </li>
            <li>
                  <NavLink
                        to="/about"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF3811] text-lg font-semibold border-b-2 border-[#FF3811]" : "text-lg font-semibold text-[#444]"
                        }
                  >
                        About
                  </NavLink>
            </li>
            <li>
                  <NavLink
                        to="/service"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF3811] text-lg font-semibold border-b-2 border-[#FF3811]" : "text-lg font-semibold text-[#444]"
                        }
                  >
                        Service
                  </NavLink>
            </li>
            <li>
                  <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF3811] text-lg font-semibold border-b-2 border-[#FF3811]" : "text-lg font-semibold text-[#444]"
                        }
                  >
                        Contact
                  </NavLink>
            </li>
            <li>
                  <NavLink
                        to="/login"
                        className={({ isActive }) =>
                              isActive ? "text-[#FF3811] text-lg font-semibold border-b-2 border-[#FF3811]" : "text-lg font-semibold text-[#444]"
                        }
                  >
                        Login
                  </NavLink>
            </li>
            {
                  user &&
                  <li>
                        <NavLink
                              to="/myBookings"
                              className={({ isActive }) =>
                                    isActive ? "text-[#FF3811] text-lg font-semibold border-b-2 border-[#FF3811]" : "text-lg font-semibold text-[#444]"
                              }
                        >
                              My Bookings
                        </NavLink>
                  </li>
            }

      </div>



      return (
            <div className="max-w-7xl mx-auto">
                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          {links}
                                    </ul>
                              </div>
                              <Link to='/'>
                                    <img className='h-16' src={logo} alt="logo image" />
                              </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className=" menu-horizontal px-1">
                                    {links}
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <button className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                              </button>

                              {
                                    user &&
                                    <div className="dropdown dropdown-end">
                                          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                      <img src={user.photoURL} />
                                                </div>
                                          </label>
                                          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
                                                <li className='text-[#FF3811]'>{user.displayName}</li>
                                                <li className='text-[#FF3811]'>{user.email}</li>
                                                <button onClick={handleLogOut} className="mt-2 rounded-md  text-[#FF3811] hover:text-white hover:bg-[#FF3811] border border-[#FF3811]">Logout</button>
                                          </ul>
                                    </div>
                              }

                              <button className="py-2 ml-2 px-7 rounded-md text-lg font-semibold text-[#FF3811] hover:text-white hover:bg-[#FF3811] border border-[#FF3811]">Appoinment</button>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;