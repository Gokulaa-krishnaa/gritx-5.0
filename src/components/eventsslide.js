import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import instalogo from '../assets/instalogo.png';
import twitterlogo from '../assets/twitterlogo.png';
import linkedinlogo from '../assets/linkedinlogo.png';
import pixmelogo from '../assets/pixmelogo.png';
const images = [instalogo, twitterlogo, linkedinlogo,linkedinlogo];


const EventsSlide = () => {
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next flex items-center z-20 justify-center col-span-1" onClick={onClick}>
            <FaArrowRight className="rounded-full drop-shadow-2xl hover:scale-125 p-2 w-10 h-10 bg-gold"  />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev flex items-center z-20 justify-center col-span-1" onClick={onClick}>
            <FaArrowLeft className="rounded-full drop-shadow-2xl hover:scale-125 p-2 w-10 h-10 bg-gold" />
          </div>
        );
      };
    
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
    return (  
        <>
        <div className="h-screen w-full lg:w-11/12 bg-quaternaryblack float-right">
            <section id="slider" className="pt-5 w-full h-full lg:pl-12 xl:pl-14 float-right ">
                <div className=" w-full h-full ">
                    <h1 className="text-5xl text-purple border-l-4 ml-14 font-semibold border-l-gold pl-2"> EVENTS </h1>
                        <div className="slider  grid grid-cols-12 w-full h-4/5 mt-5 p-2 overflow-hidden">
                        <PrevArrow />

                        <div className="owl-carousel  flex flex-col flex-wrap justify-center items-center col-span-10 w-full h-full overflow-hidden">


                            <div className="slider-card w-full h-full bg-secondaryblack text-white z-10  sm:w-96 md:w-128 rounded-xl  col-span-3 m-1">
                                
                                <h5 className="mt-5 text-xl font-bold text-center"><b>PIXME</b></h5>
                                <div className="w-full h-2/5  flex justify-center items-center align-items-center ">
                                    <img src={pixmelogo} className="w-4/12 object-cover" alt="" />
                                </div>
                                <p className="text-center  text-sm sm:text-md px-10 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.
                                </p>

                                <div className="button flex flex-col justify-center items-center">
                                    
                                    <button className=" w-2/5 text-sm sm:text-md px-5 py-2 m-2 text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl"><a href="https://htmlcss3tutorials.com/owl-carousel-slider-bootstrap-5-example/">KNOW MORE</a></button>
                                   
                                    
                                    <button className="w-2/5 text-sm sm:text-md px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2 ">REGISTER</button>
                                    
                                </div>
                                
                            </div>

                            <div className="slider-card w-full h-full bg-secondaryblack text-white z-10  sm:w-96 md:w-128 rounded-xl  col-span-3 m-1">
                                
                                <h5 className="mt-5 text-xl font-bold text-center"><b>PIXME</b></h5>
                                <div className="w-full h-2/5  flex justify-center items-center align-items-center ">
                                    <img src={pixmelogo} className="w-4/12 object-cover" alt="" />
                                </div>
                                <p className="text-center  text-sm sm:text-md px-10 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.
                                </p>

                                <div className="button flex flex-col justify-center items-center">
                                    
                                    <button className=" w-2/5 text-sm sm:text-md px-5 py-2 m-2 text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl"><a href="https://htmlcss3tutorials.com/owl-carousel-slider-bootstrap-5-example/">KNOW MORE</a></button>
                                   
                                    
                                    <button className="w-2/5 text-sm sm:text-md px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2 ">REGISTER</button>
                                    
                                </div>
                                
                            </div>

                            <div className="slider-card w-full h-full bg-secondaryblack text-white z-10  sm:w-96 md:w-128 rounded-xl  col-span-3 m-1">
                                
                                <h5 className="mt-5 text-xl font-bold text-center"><b>PIXME</b></h5>
                                <div className="w-full h-2/5  flex justify-center items-center align-items-center ">
                                    <img src={pixmelogo} className="w-4/12 object-cover" alt="" />
                                </div>
                                <p className="text-center  text-sm sm:text-md px-10 pb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.
                                </p>

                                <div className="button flex flex-col justify-center items-center">
                                    
                                    <button className=" w-2/5 text-sm sm:text-md px-5 py-2 m-2 text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl"><a href="https://htmlcss3tutorials.com/owl-carousel-slider-bootstrap-5-example/">KNOW MORE</a></button>
                                   
                                    
                                    <button className="w-2/5 text-sm sm:text-md px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2 ">REGISTER</button>
                                    
                                </div>
                                
                            </div>



                        </div>

                        <NextArrow />
                        </div>
                    </div>
                    
            </section>
        </div>
        </>
    );
}
 
export default EventsSlide;