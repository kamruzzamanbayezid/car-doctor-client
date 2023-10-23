import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

      const [services, setServices] = useState([]);

      useEffect(() => {
            axios.get('/service.json')
                  .then(data => {
                        setServices(data.data);
                  })
      }, [])

      return (
            <div className="max-w-7xl mx-auto">
                  <h4 className='text-[#FF3811] text-xl font-bold text-center mb-5'>About Us</h4>
                  <h2 className="text-center text-[#151515] text-5xl font-semibold mb-5">Our Service Area</h2>
                  <p className="text-[#737373] text-center font-normal mb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                              services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                  </div>

                  <div className="flex justify-center mt-10">
                        <button className="py-3 px-7 rounded-md text-lg font-semibold text-[#FF3811] hover:text-white hover:bg-[#FF3811] border border-[#FF3811]">More Services</button>
                  </div>

            </div>
      );
};

export default Services;