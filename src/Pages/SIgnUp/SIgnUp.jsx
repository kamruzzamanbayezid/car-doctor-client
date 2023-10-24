
import image from '../../../public/assets/images/login/login.svg'
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const SIgnUp = () => {
      return (
            <div className='flex flex-col lg:flex-row my-14 max-w-7xl mx-auto'>
                  <div className='lg:w-1/2 flex items-center justify-center'>
                        <img src={image} alt="" />
                  </div>
                  <div className='lg:w-1/2'>

                        <div className="w-full p-16 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                              <form className="space-y-6" action="#">
                                    <h5 className="text-4xl font-semibold text-center mb-10 text-[#444] dark:text-white">Sign Up</h5>
                                    <div>
                                          <label htmlFor="name" className="text-[#444] text-lg font-semibold block mb-2  dark:text-white">Name</label>
                                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-[#A2A2A2] font-normal h-14 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="your name" required/>
                                    </div>
                                    <div>
                                          <label htmlFor="email" className="text-[#444] text-lg font-semibold block mb-2  dark:text-white">Email</label>
                                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-[#A2A2A2] font-normal h-14 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                                    </div>
                                    <div>
                                          <label htmlFor="password" className="text-[#444] text-lg font-semibold block mb-2  dark:text-white">Confirm password</label>
                                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 h-14 text-[#A2A2A2] font-normal text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                    </div>
                                    
                                    <button className="py-3  px-7 w-full rounded-md text-lg font-semibold hover:text-[#FF3811] text-white hover:bg-transparent bg-[#FF3811] border border-[#FF3811]">Sign up</button>

                                    <SocialLogin></SocialLogin>

                                    <div className="text-lg font-medium text-center text-[#737373] dark:text-gray-300">
                                          ALready have an account? <a href="#" className="text-[#FF3811] hover:underline dark:text-blue-500">Login</a>
                                    </div>
                              </form>
                        </div>

                  </div>
            </div>
      );
};

export default SIgnUp;