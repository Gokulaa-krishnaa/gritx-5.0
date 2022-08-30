

import React, { Component } from "react";
import Slider from "react-slick";
import mindtwisterslogo from '../assets/mindtwisterslogo.png'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
        <div className="h-screen w-full lg:w-11/12 float-right bg-primaryblack">
            <div className="w-8/12 w-full m-auto ">
                <h2> Single Item</h2>
                <Slider {...settings}>
                <div>
                <div className="slider-card w-full h-full bg-secondaryblack text-white z-10  sm:w-96 md:w-128 rounded-xl  col-span-3 m-1">
                                
                                <h5 className="mt-5 text-2xl font-bold text-center"><b>eventtitle</b></h5>
                                <div className="w-full h-1/5 my-8 flex justify-center items-center align-items-center ">
                                    <img src={mindtwisterslogo} className="w-4/12 object-cover" alt="" />
                                </div>
                                <p className="text-justify  text-sm sm:text-md px-20 py-2">
                                    eventsdetails.eventdescription
                                </p>

                                <div className="button flex flex-col justify-center items-center">
                                    
                                    <button className=" w-2/5 text-sm sm:text-md px-5 py-2 m-2 text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl"><a href="https://htmlcss3tutorials.com/owl-carousel-slider-bootstrap-5-example/">KNOW MORE</a></button>
                                   
                                    
                                    <button className="w-2/5 text-sm sm:text-md px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2 ">REGISTER</button>
                                    
                                </div>
                                
                            </div>
                </div>
                <div>
                <div className="slider-card w-full h-full bg-secondaryblack text-white z-10  sm:w-96 md:w-128 rounded-xl  col-span-3 m-1">
                                
                                <h5 className="mt-5 text-2xl font-bold text-center"><b>eventtitle</b></h5>
                                <div className="w-full h-1/5 my-8 flex justify-center items-center align-items-center ">
                                    <img src={mindtwisterslogo} className="w-4/12 object-cover" alt="" />
                                </div>
                                <p className="text-justify  text-sm sm:text-md px-20 py-2">
                                    eventsdetails.eventdescription
                                </p>

                                <div className="button flex flex-col justify-center items-center">
                                    
                                    <button className=" w-2/5 text-sm sm:text-md px-5 py-2 m-2 text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl"><a href="https://htmlcss3tutorials.com/owl-carousel-slider-bootstrap-5-example/">KNOW MORE</a></button>
                                   
                                    
                                    <button className="w-2/5 text-sm sm:text-md px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2 ">REGISTER</button>
                                    
                                </div>
                                
                            </div>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
            </div>
      </div>
    );
  }
}