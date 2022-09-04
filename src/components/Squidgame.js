import { Link } from 'react-router-dom';
import squidgamelogo from '../assets/squidgamelogo.png'

const Squidgame = () => {
    return (  
        <div className="min-h-fit w-full lg:w-11/12 bg-secondaryblack float-right " id="squidgamesection">
            <section className="pt-5 w-full h-full mt-10 lg:pl-12 xl:pl-14 float-right">
            <div className=" w-10/12 h-full m-auto ">
          
            <h1 className="text-4xl md:text-4xl text-purple border-l-4  font-semibold border-l-gold pl-2"> SQUID<br />GAME</h1>
            </div>
            <div >
                <div className="card bg-primaryblack/50 h-full w-10/12 grid md:grid-cols-2 justify-center items-center m-auto my-5  rounded-xl p-10">
                    <div >
                        <div className="content text-fadewhite font-light p-3 flex justify-center items-center	">
                            <p>A daring game that definitely makes you thrilled to bits! There are three levels of adventure that one needs to surpass with a strong will to grab the bull’s eye!
                                Just have a hand in with your fellow mates to make a feat!
                                Fling your abilities with a short rapid-fire .Get ready for some adrenaline rush through you!!
                            </p>
                        </div>
                        <div className="button flex flex-col justify-center items-center my-7 md:my-15">
                            
                            <Link to="/squidgame" className='w-4/5 sm:w-2/5 m-2 '><button className="w-full hover:scale-125 text-xs sm:text-md px-5 py-2 text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl">KNOW MORE</button> </Link>
                            
                            
                            <a href="https://www.geeksforgeeks.org/" target="_blank" className="w-4/5 sm:w-2/5  text-xs sm:text-md flex justify-center px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2 "><button>REGISTER</button></a>
                            
                        </div>
                    </div>
                    <div classname="logoBox flex justify-center items-center w-full h-full ">
                        <img src={squidgamelogo} className=" w-3/5 md:w-4/5  h-4/5 m-auto p-4" alt="squidgamelogo" />
                    </div>
                </div>
            </div>
            </section>
            
        </div>

    );
}
 
export default Squidgame;
