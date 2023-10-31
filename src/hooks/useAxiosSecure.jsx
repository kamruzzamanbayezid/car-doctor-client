import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContent } from "../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
      baseURL: 'https://car-doctor-server-liart-zeta.vercel.app',
      withCredentials: true
})


const useAxiosSecure = () => {
      const { logOut } = useContext(AuthContent);
      const navigate = useNavigate()

      useEffect((() => {
            axiosSecure.interceptors.response.use((response) => {
                  return response
            }, error => {
                  console.log('interception error', error.response);
                  if (error.response.status === 401 || error.response.status === 403) {
                        console.log('User logged out');
                        logOut()
                              .then(() => {
                                    navigate('/login')
                              })
                              .catch(error => {
                                    console.log(error.message);
                              })
                  }
            })
      }), [logOut, navigate])

      return axiosSecure;
};

export default useAxiosSecure;