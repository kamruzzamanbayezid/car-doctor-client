
import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

      const { _id, title, price, img } = service;

      return (
            <div className=" bg-base-100 border rounded-lg">
                  <figure className="px-6 pt-6 h-[208px]">
                        <img src={img} alt="Shoes" className="h-[208px] w-full rounded-lg" />
                  </figure>
                  <div className="card-body mt-4">
                        <h2 className="card-title mb-4">{title}</h2>
                        <div className="card-actions flex justify-between items-center">
                              <span className='text-[#FF3811] text-xl font-semibold'>Price: ${price}</span>
                              <Link to={`/booking/${_id}`}>
                                    <span><AiOutlineArrowRight className='text-[#FF3811] text-2xl'></AiOutlineArrowRight></span>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

ServiceCard.propTypes = {
      service: PropTypes.object
}

export default ServiceCard;