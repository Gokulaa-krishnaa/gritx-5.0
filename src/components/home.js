import campusambassadorlogo from '../assets/campusambassadorlogo.png'

const Home = () => {
    return ( 
        <div className="h-screen float-right w-full lg:w-11/12  bg-grey bg-blurbwclgimg bg-cover bg-no-repeat" id="homesection">
            <div >
            <section className="pt-5 w-full h-full my-10 lg:pl-12 xl:pl-14 float-right">
            <div className=" w-10/12 h-full m-auto ">
          
            <h1 className="text-3xl md:text-4xl text-purple border-l-4  font-semibold border-l-gold pl-2"> CAMPUS<br />AMBASSADOR</h1>
            </div>
            <div >
                <div className="card bg-primaryblack/50 h-full w-10/12 grid md:grid-cols-2 justify-center items-center m-auto my-5  rounded-xl p-10">
                    <div classname="logoBox flex justify-center items-center w-full h-full ">
                        <img src={campusambassadorlogo} className=" w-3/5 md:w-4/5  h-4/5 m-auto p-4" alt="campusambassadorlogo" />
                    </div>
                    <div >
                        <div className="content text-fadewhite font-light p-3 flex justify-center items-center	">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis facilisis nisl, sed tincidunt massa posuere vel. Vivamus semper lectus et justo scelerisque mollis. Integer tempor neque venenatis, maximus nibh id, suscipit
                                metus. Suspendisse condimentum blandit auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi vitae sodales nisi. In porttitor diam arcu, eu mattis ipsum dignissim a. In velit
                                quam, mattis in tempus ac, sollicitudin non ex.</p>
                        </div>
                        <div className="button flex flex-col justify-center items-center my-7 md:my-15">
                            
                            <button className=" w-4/5 sm:w-2/5 hover:scale-125 text-xs sm:text-md px-5 py-2 m-2 text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl"><a href="https://htmlcss3tutorials.com/owl-carousel-slider-bootstrap-5-example/">KNOW MORE</a></button>
                            
                            
                            <button className="w-4/5 sm:w-2/5  text-xs sm:text-md flex justify-center px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2 ">REGISTER</button>
                            
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
        </div>
     );
}
 
export default Home;