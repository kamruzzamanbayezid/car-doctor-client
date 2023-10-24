
import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContent } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = () => {

      const { googleLogin, facebookLogin } = useContext(AuthContent);

      const socialLogin = media => {
            media()
                  .then(() => {
                        toast.success('You Successfully Logged in')
                  })
                  .catch(error => {
                        toast.error(error.message)
                        console.log(error)
                  })
      }

      return (
            <div className="">
                  <p className="text-[#444] text-lg font-medium text-center mb-7">Or Sign Up with</p>
                  <div className="flex items-center justify-center gap-4">
                        <span onClick={() => socialLogin(facebookLogin)} className="text-3xl cursor-pointer text-[#3B5998]"><FaFacebookF className=""></FaFacebookF></span>
                        <span className="text-3xl cursor-pointer text-[#3B5998]"><FaLinkedinIn></FaLinkedinIn></span>
                        <span onClick={() => socialLogin(googleLogin)} className="text-3xl cursor-pointer "><FcGoogle></FcGoogle></span>
                  </div>
            </div>
      );
};

export default SocialLogin;