import { useState } from "react";
const Mindtwisterdetails= () =>{
    

    const details={
        eventfirstname:"MIND",
        eventlastname:"TWISTER",
        date:26,
        month:"sep",
        year:2022,
        eventdescription:"Mind Twisters is an exciting event to make your brain go stark crazy! The event has 3 rounds to bring out the tycoon in you with a bit of jest. Participate with your pals to have fun while sharing your humorous ideas and an excellent knack for persuading the consumers, but with a funny way of expressing your plans.",
        numberofrounds:3,
        totalwinners:3,
        firstprizecash:750,
        secondprizecash:500,
        thirdprizecash:250,
    };
    


    return details;
}

const Mindtwistersroundsdetails=()=>{
    const roundsdetails=[
        {roundtitle:"Dragonden",rounddescription:"The participants will be provided with topics, from which they have to choose one and make a plan to sell the product, humorously that is feasible in the real world."},
        {roundtitle:"Dragonden",rounddescription:"The selected participants will go through the second round where they have to go under interrogation with comical questions which they have to answer cleverly."},
        {roundtitle:"Dragonden",rounddescription:"The finalists will travel on a ship where their life is at stake. Their only chance of survival is in the hands of the ship captain. Use your wits to captivate the captain’s mind."}
    ]
    return roundsdetails
}

export default {Mindtwisterdetails,Mindtwistersroundsdetails};