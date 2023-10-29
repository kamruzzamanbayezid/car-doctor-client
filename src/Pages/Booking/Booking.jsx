
import { useContext } from 'react';
import { AuthContent } from '../../Provider/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Booking = () => {

      const { user } = useContext(AuthContent);
      const loadeService = useLoaderData();

      const { _id, title, img, price } = loadeService;

      const handleAddServices = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const title = form.title.value;
            const date = form.date.value;
            const email = form.email.value;
            const price = form.price.value;

            const order = {
                  name,
                  title,
                  date,
                  email,
                  price,
                  img
            }

            fetch('http://localhost:5001/bookings', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(order)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              Swal.fire(
                                    'Good job!',
                                    'Service Booking Successfully!',
                                    'success'
                                  )
                        }
                  })
      }

      return (
            <div className="max-w-7xl mx-auto mb-24 mt-8">
                  <div id="slide2" className="carousel-item mb-16 relative w-full">
                        <img src={img} className="w-full lg:h-[300px] rounded-xl" />
                        <div className="absolute w-1/2 rounded-xl flex  items-center bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
                              <div className='space-y-7 pl-24'>
                                    <h2 className='text-5xl font-bold text-[#FFF]'>Check Out</h2>

                              </div>
                        </div>
                  </div>

                  <div className='bg-[#F3F3F3] rounded-xl p-20'>
                        <form onSubmit={handleAddServices} >
                              <div className='grid grid-cols-2 gap-6 mb-6'>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full " required />
                                    <input type="text" name='title' defaultValue={title} className="input input-bordered w-full " required />
                                    <input type="date" name='date' placeholder="Date" className="input input-bordered w-full " required />
                                    <input type="text" name='price' readOnly defaultValue={'$' + price} className="input input-bordered w-full " />
                              </div>

                              <input type="email" name='email' defaultValue={user.email} className="input input-bordered w-full mb-6" required />
                              <textarea className='w-full p-8' name="" id="" cols="30" placeholder='Product Description' rows="6"></textarea>

                              <button type="submit" className="w-full mt-6 hover:text-[#FF3811] text-white bg-[#FF3811] hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg  px-5 py-3 border border-[#FF3811] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order Confirm</button>
                        </form>

                  </div>
            </div>
      );
};

export default Booking;