import alleventlogocollab from '../assets/alleventlogocollab.png'
import gritxtitlelogo from '../assets/gritxtitlelogo.png'
import gritxlogo from '../assets/grit x main logo.png'
import gritxlogo2 from '../assets/gritxtitlelogo2.png'

const Home = () => {
    return ( 
        <div className="min-h-screen float-right w-full lg:w-11/12  bg-grey bg-blurbwclgimg bg-cover bg-no-repeat" id="homesection">
            
            <div >
                
            <section className="pt-2 w-full h-full my-10 mt-16 sm:my-24 lg:my-20 lg:pl-12 xl:pl-14 float-right">
            
            <div >
            
                <div className="card bg-primaryblack/50 h-full w-10/12 flex flex-col justify-center items-center m-auto my-5 rounded-xl p-10">
                        <div className=" w-full h-full md:m-3 ">
                            <img src={gritxtitlelogo} alt=""  className="border-l-4 hover:border-l-8 md:w-1/5 md:h-1/5 font-semibold border-l-gold pl-5 md:pl-8 "></img>   
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center'>
                            <div className='lg:float-right w-full h-60 pt-20 justify-center items-center lg:hidden flex md:mb-10'>
                                    <img src={alleventlogocollab} alt="eventlogos" className='rotate absolute w-60 md:w-80' />
                                    <img src={gritxlogo} alt="" className='w-20 md:w-30'></img>
                            </div>
                            <div className=" w-full text-fadewhite font-light p-3 lg:col-span-2">
                                <p className='flex items-center justify-center mt-10 md:pr-4 text-center lg:pr-2 text-md sm:text-xl'>Sairam NSS is presenting GRITx on the occasion of NSS Day. This time it's magnificent than before. We bring you GRITx 5.0, this time it's unique.
                                GRITx 5.0 Roots for the youth's zeal and the genius in them. Showcase your wit in amusing non-technical games. Are you a mastermind? bring it on in the technical events! 
                                GRITx is a grand event that is composed of spectacular contests viz Mind Twisters -To melt your brain, The warrior's league-Touchdown! Slam Dunk! Goal! check your sports addiction and many more! You will get to participate in mind blowing competition and compete with worthy opponents. Don't hold back yourself, let out the challenger in you. 
                                The mode of events will be partly online/offline.</p>
                            </div>
                            <div className='lg:float-right w-full md:w-80 justify-center items-center hidden lg:flex'>
                                    <img src={alleventlogocollab} alt="eventlogos" className='rotate absolute w-full md:w-80' />
                                    <img src={gritxlogo} alt="" className='m-auto md:w-3/12 '></img>
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