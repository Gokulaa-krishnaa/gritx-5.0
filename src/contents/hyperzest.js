

const Hyperzestdetails= () =>{
    
    
    const details={
        eventfirstname:"Hyper",
        eventlastname:"Zest",
        eventtagline:"Sometimes questions are complicated and the answers are simple",
        overallclass:"bg-hyperzestbg bg-contain bg-no-repeat bg-fixed  bg-left-top bg-opacity-30",
        date:26,
        month:"Sep",
        year:2022,
        eventdescription:"Hyper Zest is a fun and mind action event. The problem, which looks simple, has more effect on society. Here, your presence of mind and way of approach plays a key role. The participants gain knowledge on various problems and their solutions which exist in society nowadays. The event mainly focuses on how you are adaptable to the society and your service spirit towards the nation.",
        numberofrounds:3,
        totalwinners:3,
        firstprizecash:750,
        secondprizecash:450,
        thirdprizecash:300,
        registrationlink:"https://docs.google.com/forms/d/e/1FAIpQLSfK_4snlq_ROc0fagzJ1SP2xHBL9bg_r7nU3A8PHYsUDsHRLQ/viewform",
        
    };
    


    return details;
}

const Hyperzestsroundsdetails=()=>{
    const roundsdetails=[
        {id:"1",btnid:"roundbtn1",onClickfunction:"roundbtnx",roundtitle:"Wager War",rounddescription:"Wager War is a quiz event which will be conducted on 17.09.2022(Saturday) in Online mode (Gmeet). The quiz is based on societal problems, about NSS and general knowledge.Further details will be intimated by the organizing team on or before the event.",date:17,month:"Sep",year:2022},
        {id:"2",btnid:"roundbtn2",onClickfunction:"roundbtny",roundtitle:"Crack-a-thon",rounddescription:"Crack-a-thon is like a presentation round which will be conducted on 19.09.2022(Monday)in Online mode(Gmeet).The shortlisted students will present a presentation with 3 slides under the given problem statements. Problem statements and time slots will be given along with the shortlisted participants list after the completion of round 1.",date:19,month:"Sep",year:2022},
        {id:"3",btnid:"roundbtn3",onClickfunction:"roundbtnz",roundtitle:"Mind's Eye",rounddescription:"Mind's Eye is an event which will be conducted on 24.09.2022(Saturday) in Offline mode at Sri Sairam Engineering College, Chennai. The shortlisted Participants will have a one and one interaction  with the judges. Judges will post you with general questions based on society problems, the well answered participant will be awarded with a cash prize and winning certificate.",date:24,month:"Sep",year:2022},
    ]
    return roundsdetails;
}

const Hyperzestcontactdetails=()=>{
    const contactdetails = {
        contactperson1:"Gokulaa Krishnaa S",
        contactperson2:"Abishek",
        contact1:"7358543180",
        contact2:"8825829572",
        coordinators:["Gokulaa Krishnaa S","Abishek R","Jannathul Nayeema R","Sivaanii D"],
        contactemail:"hyperzest@gmail.com",
    }

    return contactdetails;
}

export default {Hyperzestdetails,Hyperzestsroundsdetails,Hyperzestcontactdetails};