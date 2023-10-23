
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/assets/icons/logo.svg';

const Navbar = () => {

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
                              <button className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                          <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                              </button>

                              <button className="py-3 px-7 rounded-md text-lg font-semibold text-[#FF3811] hover:text-white hover:bg-[#FF3811] border border-[#FF3811]">Appoinment</button>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;