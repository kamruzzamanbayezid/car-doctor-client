
import img1 from '../../../../public/assets/images/banner/1.jpg'
import img2 from '../../../../public/assets/images/banner/2.jpg'
import img3 from '../../../../public/assets/images/banner/3.jpg'
import img4 from '../../../../public/assets/images/banner/4.jpg'

const Banner = () => {
      return (
            <div className="max-w-7xl mx-auto mt-10">
                  <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                              <img src={img1} className="w-full lg:h-[600px] rounded-xl" />
                              <div className="absolute flex justify-between bottom-10 right-10">
                                    <a href="#slide4" className="btn mr-5 btn-circle hover:bg-[#FF3811] hover:text-white ">❮</a>
                                    <a href="#slide2" className="btn  btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                              </div>
                              <div className="absolute md:w-1/2 rounded-xl flex justify-center items-center bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
                                    <div className=' space-y-3 md:space-y-7 p-4 lg:pl-20'>
                                          <h2 className='lg:text-6xl text-xl md:text-2xl font-bold text-[#FFF]'>Affordable Price For Car Servicing</h2>
                                          <p className='md:text-lg text-sm text-white font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                          <div className='flex flex-col lg:flex-row gap-4 w-40 md:w-48 lg:w-full'>
                                                <button className="md:py-3 py-1 px-3 md:px-7 rounded-md md:text-lg font-semibold  text-white hover:bg-transparent bg-[#FF3811] hover:border ">Discover More</button>

                                                <button className="md:py-3 py-1 px-3 md:px-7 rounded-md md:text-lg font-semibold text-white hover:bg-[#FF3811] border hover:border-none">Latest Project</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                              <img src={img2} className="w-full lg:h-[600px] rounded-xl" />
                              <div className="absolute flex justify-between bottom-10 right-10">
                                    <a href="#slide1" className="btn mr-5 btn-circle hover:bg-[#FF3811] hover:text-white ">❮</a>
                                    <a href="#slide3" className="btn  btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                              </div>
                              <div className="absolute w-1/2 rounded-xl flex justify-center items-center bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
                                    <div className='space-y-7 pl-20'>
                                          <h2 className='text-6xl font-bold text-[#FFF]'>Affordable Price For Car Servicing</h2>
                                          <p className='text-lg text-white font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                          <div className=''>
                                                <button className="py-3 px-7 mr-5 rounded-md text-lg font-semibold  text-white hover:bg-transparent bg-[#FF3811] hover:border ">Discover More</button>

                                                <button className="py-3 px-7 rounded-md text-lg font-semibold text-white hover:bg-[#FF3811] border hover:border-none">Latest Project</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                              <img src={img3} className="w-full lg:h-[600px] rounded-xl" />
                              <div className="absolute flex justify-between bottom-10 right-10">
                                    <a href="#slide2" className="btn mr-5 btn-circle hover:bg-[#FF3811] hover:text-white ">❮</a>
                                    <a href="#slide4" className="btn  btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                              </div>
                              <div className="absolute w-1/2 rounded-xl flex justify-center items-center bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
                                    <div className='space-y-7 pl-20'>
                                          <h2 className='text-6xl font-bold text-[#FFF]'>Affordable Price For Car Servicing</h2>
                                          <p className='text-lg text-white font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                          <div className=''>
                                                <button className="py-3 px-7 mr-5 rounded-md text-lg font-semibold  text-white hover:bg-transparent bg-[#FF3811] hover:border ">Discover More</button>

                                                <button className="py-3 px-7 rounded-md text-lg font-semibold text-white hover:bg-[#FF3811] border hover:border-none">Latest Project</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                              <img src={img4} className="w-full lg:h-[600px] rounded-xl" />
                              <div className="absolute flex justify-between bottom-10 right-10">
                                    <a href="#slide3" className="btn mr-5 btn-circle hover:bg-[#FF3811] hover:text-white ">❮</a>
                                    <a href="#slide1" className="btn  btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                              </div>
                              <div className="absolute w-1/2 rounded-xl flex justify-center items-center bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
                                    <div className='space-y-7 pl-20'>
                                          <h2 className='text-6xl font-bold text-[#FFF]'>Affordable Price For Car Servicing</h2>
                                          <p className='text-lg text-white font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                          <div className=''>
                                                <button className="py-3 px-7 mr-5 rounded-md text-lg font-semibold  text-white hover:bg-transparent bg-[#FF3811] hover:border ">Discover More</button>

                                                <button className="py-3 px-7 rounded-md text-lg font-semibold text-white hover:bg-[#FF3811] border hover:border-none">Latest Project</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;