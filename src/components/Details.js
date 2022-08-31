import React from "react";

function Details() {

  const roundbtn = () => {
    const x = document.getElementById("round1btn");
    const y = document.getElementById("round2btn");
    const z = document.getElementById("round3btn");
    const r1 = document.getElementById("round1");
    const r2 = document.getElementById("round2");
    const r3 = document.getElementById("round3");

    x.addEventListener('click', () => {
      if (r1.classList.contains("hidden")) {
        r1.classList.remove("hidden");
        r2.classList.add("hidden");
        r3.classList.add("hidden");
      }
    });

    y.addEventListener("click", () => {
      if (r2.classList.contains("hidden")) {
        r1.classList.add("hidden");
        r2.classList.remove("hidden");
        r3.classList.add("hidden");
      }
    });

    z.addEventListener("click", () => {
      if (r3.classList.contains("hidden")) {
        r1.classList.add("hidden");
        r2.classList.add("hidden");
        r3.classList.remove("hidden");
      }
    });
  };

  return (
    <div>
        <div className="flex justify-center mt-14 p-10">
        <div className=" w-11/12 sm:w-3/4 h-auto p-10 bg-black ">

            
                
            <h1 className="text-[#B760B1] text-center  text-2xl mr-4 sm:text-3xl sm:text-left md:text-4xl lg:text-4xl xl:text-5xl font-rubik-one">SCHEDULE</h1>

            <div className="grid grid-cols-3 gap-12 mr-3 -ml-3 mt-4 sm:gap-7 sm:pl-0 md:pl-4 lg:pl-28 sm:pt-8  ">
                <div className=" " id="round1btn">
                    <button className="text-[#229D98] font-rubik-one text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={roundbtn} type="button" >ROUND 1</button>
                </div>

                <div className="" id="round2btn">
                    <button className="text-[#229D98] font-rubik-one text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={roundbtn}  type="button" >ROUND 2</button>
                </div>

                <div className="" id="round3btn">
                    <button className="text-[#229D98] font-rubik-one text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={roundbtn} type="button" >ROUND 3</button>
                </div>

            </div>

            <div className="flex items-center justify-center">
            <div className="flex my-4 sm:my-10 w-11/12 border-10 bg-[#191919] drop-shadow-lg ">

            <div className="sm:m-7 p-4" id="round1" >

                <h3 className="text-[#B760B1] text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-rubik-one"> Dragons Den </h3>
                <p className="text-white text-xs sm:text-sm sm:pt-2 md:text-base lg:text-md xl:text-lg">
                        The participants will be provided with topics, from which they have
                        to choose one and make a plan to sell the product, humorously that 
                        is feasible in the real world.
                </p>
            </div>

                                            
            <div className="sm:m-7 p-4 hidden" id="round2">
                <h3 className="text-[#B760B1] text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-rubik-one"> Round Two</h3>
                <p className="text-white text-xs sm:text-sm sm:pt-2 md:text-base lg:text-md xl:text-lg">
                            The selected participants will go through the second round where
                             they have to go under interrogation with comical questions which
                              they have to answer cleverly.
                </p>
            </div>                            

            <div className="sm:m-7 p-4 hidden " id="round3">
                <h3 className="text-[#B760B1] text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-rubik-one"> Round Three </h3>
                <p className="text-white text-xs sm:text-sm sm:pt-2 md:text-base lg:text-md xl:text-lg">
                                The finalists will travel on a ship where their life is at
                                 stake. Their only chance of survival is in the hands of the 
                                 ship captain. Use your wits to captivate the captain’s mind.
                </p>
            </div>
                                            


                                      
        </div>
        </div>
        </div>
        </div>



    </div>
    
  );
}

// bg-no-repeat bg-cover bg-[url('images/layer.png')]
export default Details;
