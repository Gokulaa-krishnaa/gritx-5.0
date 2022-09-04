import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import mindtwisterslogo from '../assets/mindtwisterslogo.png';
import dazeplaylogo from '../assets/dazeplaylogo.png'
import hyperzestlogo from '../assets/hyperzestlogo.png'
import funnyweaverlogo from '../assets/funnyweaverlogo.png'
import pixmelogo from '../assets/pixmelogo.png'
import warriorsleaguelogo from '../assets/warriorsleaguelogo.png'

const Containers=()=>{
  
    

    const settings = {
       
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          
      };

      const [eventsdetails,setEventdetails]=useState(
        [
            {index:1,eventtitle:"Mind Twister",eventlogo:mindtwisterslogo,eventdescription:"Mind Twisters is an exciting event to make your brain go stark crazy! This event has 3 rounds to bring out the tycoon in you with a bit of jest. ",registerlink:"https://forms.gle/MXwgox6ATLb6hgJ37",navlink:"/mindtwisters",navlink:"/mindtwisters"},
            {index:2,eventtitle:"Hyper-Zest",eventlogo:hyperzestlogo,eventdescription:"How exhausted are you by the interview process? It's time to leave it aside and let's have a witty and funny interview and make you feel better. Join us!",registerlink:"https://docs.google.com/forms/d/e/1FAIpQLSfK_4snlq_ROc0fagzJ1SP2xHBL9bg_r7nU3A8PHYsUDsHRLQ/viewform",navlink:"/hyperzest"},
            {index:3,eventtitle:"Daze-Play",eventlogo:dazeplaylogo,eventdescription:"Hey Buddies, it’s time to unwind yourselves. Participating in this entertaining event will indeed be fun and interesting!",registerlink:"https://forms.gle/PyzfbVtXoUAxc7637",navlink:"/dazeplay"},
            {index:4,eventtitle:"Pixme",eventlogo:pixmelogo,eventdescription:"The picture that you took with your camera is the imagination you want to create with reality. Participate to showcase your photographic skils!",registerlink:"https://forms.gle/BX1pK5GK44jzg98x6",navlink:"/pixme"},
            {index:5,eventtitle:"Funny Weaver",eventlogo:funnyweaverlogo,eventdescription:"Funny Weaver is a meme-creating competition to bring out the humourous side of you! Participate and humour us with your best memes!",registerlink:"https://forms.gle/X1XKmiQRLg6qcKhN8",navlink:"/funnyweaver"},
            {index:6,eventtitle:"The Warriors League",eventlogo:warriorsleaguelogo,eventdescription:" Sports lover? Do join us and play this amazing event! Engage your spirit, show your attitude in the field and kick the barrier towards the goal!",registerlink:"https://forms.gle/Us9cicYXwwsWMFNy7",navlink:"/thewarriorsleague"},
        ]
    );

    return(
      
            <div className="w-12/12 h-full mt-5 m-auto ">
                <Slider {...settings} className="w-full h-full ">
                { eventsdetails.map((event) => (
                    <div>
                    <div index={event.index} className="slider-card w-full h-full    ">
                           <div className="text-white bg-secondaryblack/50 py-1 md:p-5 m-1 md:m-3  rounded-xl ">     
                        <h5 className="mt-5 text-xl md:text-2xl font-bold text-center"><b>{event.eventtitle}</b></h5>
                        <div className="w-full h-1/5 my-2 flex justify-center items-center align-items-center ">
                            <img src={event.eventlogo} className="w-6/12 object-cover" alt="" />
                        </div>
                        <p className="text-center text-sm sm:text-md px-10 md:px-15 py-2">
                            {event.eventdescription}
                        </p>

                        <div className="button flex flex-col justify-center items-center my-7 md:my-15">
                        <Link to={event.navlink} className=" w-4/5 sm:w-2/5 m-2">
                            <button className=" w-full hover:scale-125 text-xs sm:text-md px-2 py-2  text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl">KNOW MORE</button>
                        </Link>
                        <a href={event.registerlink} target="_blank" className="w-4/5 sm:w-2/5  text-xs sm:text-md flex justify-center px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2">
                            <button >REGISTER</button>
                        </a>
                        </div>
                        </div>  
                    </div>
                    </div>
                ))}
                
                
                           
                </Slider>
            </div>
   
    );
}
export default Containers;