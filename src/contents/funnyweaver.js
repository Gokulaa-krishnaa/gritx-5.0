const Funnyweaverdetails= () =>{
    
    const details={
        eventfirstname:"Funny",
        eventlastname:"Weaver",
        eventtagline:"",
        overallclass:"bg-funnyweaversbg bg-contain bg-no-repeat bg-fixed  bg-left-top bg-opacity-30",
        date:22,
        month:"Sep",
        year:2022,
        eventdescription:"Funny Weager is a meme-creating competition that is only open to renowned meme creators, as the name suggests. Just make a meme with the phrase \" assist the needy \" in it. You can submit your meme through the shared Google form when you've created it. September 3 - September 22 are the submission dates. Prepare to present your amazing piece of art.",
        numberofrounds:1,
        totalwinners:1,
        firstprizecash:500,
        issecondprizecash:false,
        secondprizecash:0,
        thirdprizecash:0,
        registrationlink:"https://forms.gle/X1XKmiQRLg6qcKhN8",
    };
    


    return details;
}

const Funnyweaverroundsdetails=()=>{
    const roundsdetails=[
        {id:"1",btnid:"roundbtn1",onClickfunction:"roundbtnx",roundtitle:"",rounddescription:"",date:0,month:"Sep",year:2022,modeofevent:"",
        instruction:["1. Plagiarism should be avoided.\n",
        "2. Meme should be related to the given themes :  “SERVE THE NEEDY”. \n",
        "3. Winners will be chosen based on likes and creativity. \n",
        "4. Only one meme per registration \n",
        "5. Participants should mention their name, insta id, and college name in the google form. \n", 
        "6. Check for reply mail from gritx5.0@gmail.com to know your entry number. \n",
        "7. Photos will be posted on our insta page within 12 hrs of entry. \n",
        "8. Winners will be awarded on Sept 24th NSS day. E-certificates will be provided for all participants \n"],instructions:true},
        {id:"2",btnid:"roundbtn2",onClickfunction:"roundbtny",roundtitle:"-",rounddescription:"none",date:0,month:"-",year:0,modeofevent:"-"},
        {id:"3",btnid:"roundbtn3",onClickfunction:"roundbtnz",roundtitle:"-",rounddescription:"none",date:0,month:"-",year:0,modeofevent:"-"},
    ]
    return roundsdetails;
}

const Funnyweavercontactdetails=()=>{
    const contactdetails = {
        contactperson1:"Nithish",
        contactperson2:"96299 83015",
        contact1:"",
        contact2:"",
        coordinators:["Nithish","","","","",""],
        contactemail:"",
    }

    return contactdetails;
}

export default {Funnyweaverdetails,Funnyweaverroundsdetails,Funnyweavercontactdetails};