import alleventlogocollab from '../assets/alleventlogocollab.png'
import gritxlogo from '../assets/gritxtitlelogo.png'

const Home = () => {
    return ( 
        <div className="min-h-screen float-right w-full lg:w-11/12  bg-grey bg-blurbwclgimg bg-cover bg-no-repeat" id="homesection">
            
            <div >
                
            <section className="pt-2 w-full h-full my-10 lg:pl-12 xl:pl-14 float-right">
            
            <div >
            
                <div className="card bg-primaryblack/50 h-full w-10/12 flex justify-center items-center m-auto my-5  rounded-xl p-10">
                   
                    <div >
                        <div className=" w-full h-full md:m-3 ">
                           
                            <img src={gritxlogo} alt=""  className="border-l-4  font-semibold border-l-gold pl-5 md:pl-8 "></img>   
                            <img src={alleventlogocollab} alt="eventlogos" className='m-auto rotate w-full mt-5 md:w-80 md:float-right'/>
                        </div>
                        <div className=" text-fadewhite font-light p-3 ">
                        
                        <p className=' text-center text-xl'>Sairam NSS is presenting GRITx on the occasion of NSS Day. GRITx is a grand event that is composed of spectacular contests viz Mind Twisters -To melt your brain, The warrior's league - To check your sports addiction and many more! Don't hold back yourself, let out the challenger in you. 
The mode of events will be partly online/offline.</p>
                        
                           
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