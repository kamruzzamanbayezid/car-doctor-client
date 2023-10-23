
import person from '../../../../public/assets/images/about_us/person.jpg'
import parts from '../../../../public/assets/images/about_us/parts.jpg'

const AboutUs = () => {
      return (
            <div className="max-w-7xl mx-auto my-24 flex">
                  <div className="lg:w-1/2 relative">
                        <div className='rounded-xl'>
                              <img className='rounder-xl w-[460px] h-[473px]' src={person} alt="" />
                        </div>
                        <img className='rounder-xl absolute w-80 h-80 border-8 border-white top-52 left-1/3' src={parts} alt="" />
                  </div>
                  <div className="lg:w-1/2">
                        <h4 className='text-[#FF3811] text-xl font-bold mb-5'>About Us</h4>
                        <h2 className='text-[#151515] leading-tight text-5xl font-bold mb-7'>We are qualified <br /> & of experience <br /> in this field</h2>
                        <p className='text-[#737373] font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='mt-5 mb-7 text-[#737373] font-normal'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="py-3 px-7 rounded-md text-lg font-semibold  text-white bg-[#FF3811] hover:border ">Get More Info</button>
                  </div>
            </div>
      );
};

export default AboutUs;