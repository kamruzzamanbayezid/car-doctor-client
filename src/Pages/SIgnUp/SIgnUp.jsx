
import { useContext } from 'react';
import image from '../../../public/assets/images/login/login.svg'
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { AuthContent } from '../../Provider/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SIgnUp = () => {

      const { createUser, userUpdate } = useContext(AuthContent);

      const handleCreateUser = (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const photo = form.photo.value;
            const password = form.password.value;

            // validation
            if (password.length < 6) {
                  console.log("Password must be at least 6 characters long.");
            }
            else if (!/[A-Z]/.test(password)) {
                  console.log("Password must contain at least one uppercase letter.");
            }

            // create user
            createUser(email, password)
                  .then(result => {

                        // update user
                        userUpdate(name, photo)
                              .then(() => {
                                    toast.success('User Create Successfully')
                                    form.reset();
                                    window.location.reload()
                              })
                              .catch(error => {
                                    toast.error(error.message)
                              })
                  })
                  .catch(error => {
                        console.log(error.message);
                  })
      }

      return (
            <div className='flex flex-col lg:flex-row my-14 max-w-7xl mx-auto'>
                  <div className='lg:w-1/2 flex items-center justify-center'>
                        <img src={image} alt="" />
                  </div>
                  <div className='lg:w-1/2'>

                        <div className="w-full p-16 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                              <form onSubmit={handleCreateUser} className="space-y-6">
                                    <h5 className="text-4xl font-semibold text-center mb-10 text-[#444] dark:text-white">Sign Up</h5>
                                    <div>
                                          <label htmlFor="name" className="text-[#444] text-lg font-semibold block mb-2  dark:text-white">Name</label>
                                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-[#A2A2A2] font-normal h-14 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="your name" required />
                                    </div>
                                    <div>
                                          <label htmlFor="email" className="text-[#444] text-lg font-semibold block mb-2  dark:text-white">Email</label>
                                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-[#A2A2A2] font-normal h-14 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                          <label htmlFor="photo" className="text-[#444] text-lg font-semibold block mb-2  dark:text-white">Photo</label>
                                          <input type="photoURL" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-[#A2A2A2] font-normal h-14 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="photoURL" required />
                                    </div>
                                    <div>
                                          <label htmlFor="password" className="text-[#444] text-lg font-semibold block mb-2  dark:text-white">Confirm password</label>
                                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 h-14 text-[#A2A2A2] font-normal text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>


                                    <button type="submit" className="w-full hover:text-[#FF3811] text-white bg-[#FF3811] hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg  px-5 py-3 border border-[#FF3811] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                                    <SocialLogin></SocialLogin>

                                    <div className="text-lg font-medium text-center text-[#737373] dark:text-gray-300">
                                          ALready have an account? <Link to="/login" className="text-[#FF3811] hover:underline dark:text-blue-500">Login</Link>
                                    </div>
                              </form>
                        </div>

                  </div>
            </div>
      );
};

export default SIgnUp;