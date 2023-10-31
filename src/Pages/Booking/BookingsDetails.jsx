import { useContext, useEffect, useState } from "react";
import { AuthContent } from "../../Provider/AuthProvider/AuthProvider";
import image from '../../../public/assets/images/checkout/checkout.png'
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BookingsDetails = () => {

      const { user } = useContext(AuthContent);
      const [bookings, setBookings] = useState([]);

      const axiosSecure = useAxiosSecure();

      useEffect(() => {

            axiosSecure.get(`/bookings?email=${user.email}`)
                  .then(res => {
                        setBookings(res.data);
                  })

            // axios.get(`https://car-doctor-server-liart-zeta.vercel.app/bookings?email=${user.email}`, {
            //       withCredentials: true
            // })
            //       .then(data => setBookings(data.data))
      }, [user.email, axiosSecure])

      const handleDelete = id => {
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`https://car-doctor-server-liart-zeta.vercel.app/bookings/${id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your Deleted your booking.',
                                                'success'
                                          )
                                          const remaining = bookings.filter(booking => booking._id !== id)
                                          setBookings(remaining);
                                    }
                              })

                  }
            })

      }

      const handleUpdate = id => {
            fetch(`https://car-doctor-server-liart-zeta.vercel.app/bookings/${id}`, {
                  method: 'PATCH',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify({ status: 'Confirm' })
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount > 0) {
                              Swal.fire(
                                    'Good job!',
                                    'Order Confirmed Successfully!',
                                    'success'
                              )
                              const remaining = bookings.filter(booking => booking._id !== id);
                              const updated = bookings.find(booking => booking._id === id)
                              updated.status = 'Confirm';
                              const newBookings = [updated, ...remaining]
                              setBookings(newBookings);
                        }
                  })
      }

      return (
            <div className="max-w-7xl mb-24 mx-auto">
                  <div id="slide2" className="carousel-item mb-16 mt-10 relative w-full">
                        <img src={image} className="w-full lg:h-[300px] rounded-xl" />
                        <div className="absolute w-1/2 rounded-xl flex  items-center bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
                              <div className='space-y-7 pl-24'>
                                    <h2 className='text-5xl font-bold text-[#FFF]'>Cart Details</h2>

                              </div>
                        </div>
                  </div>

                  <div className="overflow-x-auto">
                        <table className="table">
                              <tbody>
                                    {
                                          bookings?.map(booking =>
                                                <tr className="border-none" key={booking._id}>
                                                      <th>
                                                            <button onClick={() => handleDelete(booking._id)} className="btn btn-circle btn-sm btn-outline">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                            </button>
                                                      </th>
                                                      <td>
                                                            <div className="flex items-center space-x-3">
                                                                  <div className="avatar">
                                                                        {
                                                                              booking.img &&
                                                                              <div className="w-36 h-36 rounded-xl">
                                                                                    <img src={booking.img} />
                                                                              </div>
                                                                        }
                                                                  </div>
                                                                  <div>
                                                                        <div className="font-semibold text-xl text-[#444]">{booking.title}</div>
                                                                        <div className="text-sm opacity-50">{booking.name}</div>
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      <td>
                                                            <span className="text-lg font-semibold text-[#444]">{booking.email}</span>
                                                            <br />
                                                            <span className="text-[#444] text-lg font-semibold">{booking.price}</span>
                                                      </td>
                                                      <td className="text-lg font-semibold text-[#444]">{booking.date}</td>
                                                      <th>
                                                            {booking?.status ?
                                                                  <span className="bg-[#FF3811] text-white btn btn-ghost btn-sm">Confirmed</span>
                                                                  :
                                                                  <button onClick={() => handleUpdate(booking._id)} className="btn btn-ghost bg-[#FF3811] btn-sm text-white">Confirm</button>}
                                                      </th>
                                                </tr>
                                          )
                                    }
                              </tbody>

                        </table>
                  </div>
            </div>
      );
};

export default BookingsDetails;