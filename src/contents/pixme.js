const Pixmedetails= () =>{
    
    const details={
        eventfirstname:"Pixme",
        eventlastname:"",
        eventtagline:"The picture that you took with your camera is the imagination you want to create with reality",
        overallclass:"bg-pixmebg bg-contain bg-no-repeat bg-fixed  bg-left-top bg-opacity-30",
        date:17,
        month:"Sep",
        year:2022,
        eventdescription:"Pixme is a photographic event that will be exciting and fun to attend. It's an excellent chance to showcase your photographic abilities.Simply uploading your work to us is all that is required. Participants must submit their photos using the attached Google form between September 3 and September 22. The photo's theme could be related to food or have a nighttime or dark tone.",
        numberofrounds:1,
        totalwinners:1,
        firstprizecash:500,
        issecondprizecash:false,
        secondprizecash:0,
        thirdprizecash:300,
        registrationlink:"https://forms.gle/BX1pK5GK44jzg98x6",
    };
    


    return details;
}

const Pixmeroundsdetails=()=>{
    const roundsdetails=[
        {id:"1",btnid:"roundbtn1",onClickfunction:"roundbtnx",roundtitle:"Quixel",rounddescription:"Quizzes with time limits and interesting,creative and  original questions to test your wit on. Are you sure to have fun with a little bit of nervousness? . This round's questions will be asked from six different categories.",date:18,month:"Sep",year:2022,modeofevent:"Online",
        instruction:["1. Plagiarism should be avoided.\n",
        "2. Photos should be related to the given themes :  Night and food. \n",
        "3. Winners will be chosen based on likes and creativity. \n",
        "4. Only one Photo per registration \n",
        "5. Participants should mention their name, insta id, and college name in the google form. \n", 
        "6. Check for reply mail from gritx5.0@gmail.com to know your entry number. \n",
        "7. Photos will be posted on our insta page within 12 hrs of entry. \n",
        "8. Winners will be awarded on sept 24th nss day. E-certificates will be provided for all participants \n"],instructions:true},
        {id:"2",btnid:"roundbtn2",onClickfunction:"roundbtny",roundtitle:"-",rounddescription:"none",date:0,month:"-",year:0,modeofevent:"-"},
        {id:"3",btnid:"roundbtn3",onClickfunction:"roundbtnz",roundtitle:"-",rounddescription:"none",date:0,month:"-",year:0,modeofevent:"-"},
    ]
    return roundsdetails;
}

const Pixmecontactdetails=()=>{
    const contactdetails = {
        contactperson1:"Nithish",
        contactperson2:"Sruthi G S",
        contact1:"96299 83015",
        contact2:"90809 39982",
        coordinators:["Sanjay M","Hariharan M","Janani T ","Elansuriya I","Snekha","Snega"],
        contactemail:"Pixme.gritx5.o@gmail.com",
    }

    return contactdetails;
}

export default {Pixmedetails,Pixmeroundsdetails,Pixmecontactdetails};