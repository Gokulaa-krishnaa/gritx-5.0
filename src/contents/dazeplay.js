const Dazeplaydetails= () =>{
    
    const details={
        eventfirstname:"Daze",
        eventlastname:"Play",
        overallclass:"bg-dazeplaybg bg-contain bg-no-repeat bg-fixed  bg-left-top bg-opacity-30",
        date:17,
        month:"Sep",
        year:2022,
        eventdescription:"Hola amigos out there! You may be growing weary with your academic routine. This cool event will help you decompress that bored feeling. Prepare your sharp thoughts and sharpen your brainy mindz for the entertaining but exciting event soon.",
        numberofrounds:3,
        totalwinners:3,
        firstprizecash:700,
        secondprizecash:500,
        thirdprizecash:300,
        registrationlink:"https://forms.gle/PyzfbVtXoUAxc7637",
    };
    


    return details;
}

const Dazeplaysroundsdetails=()=>{
    const roundsdetails=[
        {id:"1",btnid:"roundbtn1",onClickfunction:"roundbtnx",roundtitle:"Quixel",rounddescription:"Quizzes with time limits and interesting,creative and  original questions to test your wit on. Are you sure to have fun with a little bit of nervousness? . This round's questions will be asked from six different categories.",date:18,month:"Sep",year:2022,modeofevent:"Online"},
        {id:"2",btnid:"roundbtn2",onClickfunction:"roundbtny",roundtitle:"Untangle",rounddescription:"To check how far you can remember, make educated guesses and link the dots with your untangling ability.",date:18,month:"Sep",year:2022,modeofevent:"Online"},
        {id:"3",btnid:"roundbtn3",onClickfunction:"roundbtnz",roundtitle:"Brainy Mindz",rounddescription:"Get ready your minds to twist, tongues to roll and turn, eyes to wander and ears to wonder and to fine tune your concentration.",date:24,month:"Sep",year:2022,modeofevent:"Offline"},
    ]
    return roundsdetails;
}

const Dazeplaycontactdetails=()=>{
    const contactdetails = {
        contactperson1:"Sanjay M",
        contactperson2:"Hariharan M",
        contact1:"96299 83015",
        contact2:"90809 39982",
        coordinators:["Sanjay M","Hariharan M","Janani T ","Elansuriya I","Snekha","Snega"],
        contactemail:"dazeplay.gritx5.o@gmail.com",
    }

    return contactdetails;
}

export default {Dazeplaydetails,Dazeplaysroundsdetails,Dazeplaycontactdetails};