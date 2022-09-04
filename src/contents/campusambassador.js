const Campusambassadordetails= () =>{
    
    const details={
        eventfirstname:"Campus",
        eventlastname:"Ambassador",
        // eventtagline:"The picture that you took with your camera is the imagination you want to create with reality",
        overallclass:"bg-campusambassadorbg bg-contain bg-no-repeat bg-fixed  bg-left-top bg-opacity-30",
        date:17,
        month:"Sep",
        year:2022,
        eventdescription:"The greatest pride is to be an ambassador for the kind world, which will be held accountable",
        numberofrounds:1,
        totalwinners:1,
        firstprizecash:500,
        issecondprizecash:false,
        secondprizecash:0,
        thirdprizecash:0,
        registrationlink:"https://docs.google.com/forms/d/e/1FAIpQLSdqQLyDbyH56nnnp_5uh3YuF64hOMdGo-PjCIEo_juqFfNJRw/viewform?usp=sf_link",
    };
    


    return details;
}

const Campusambassadorroundsdetails=()=>{
    const roundsdetails=[
        {id:"1",btnid:"roundbtn1",onClickfunction:"roundbtnx",roundtitle:"Quixel",rounddescription:"Quizzes with time limits and interesting,creative and  original questions to test your wit on. Are you sure to have fun with a little bit of nervousness? . This round's questions will be asked from six different categories.",date:18,month:"Sep",year:2022,modeofevent:"Online",
        instruction:["1. Use that referral code to join the participants.",
        "2. The official certificate for recognition from NSS is provided if they refer to minimum of 5 participants.\n",
        "3. The cash award is given to participant who referred more participants.\n",],instructions:true},
        {id:"2",btnid:"roundbtn2",onClickfunction:"roundbtny",roundtitle:"-",rounddescription:"none",date:0,month:"-",year:0,modeofevent:"-"},
        {id:"3",btnid:"roundbtn3",onClickfunction:"roundbtnz",roundtitle:"-",rounddescription:"none",date:0,month:"-",year:0,modeofevent:"-"},
    ]
    return roundsdetails;
}

const Campusambassadorcontactdetails=()=>{
    const contactdetails = {
        contactperson1:"Kumar A",
        contact1:"7305914634",
        contact2:"0",
        coordinators:["Kumar A","Aishwaryalakshmi G"],
        contactemail:"gritx.5.0.campusambassador@gmail.com",
    }

    return contactdetails;
}

export default {Campusambassadordetails,Campusambassadorroundsdetails,Campusambassadorcontactdetails};