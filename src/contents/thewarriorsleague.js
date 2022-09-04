const Thewarriorsleaguedetails= () =>{
    
    const details={
        eventfirstname:"The Warriors",
        eventlastname:"League",
        overallclass:"bg-thewarriorsleaguebg bg-contain bg-no-repeat bg-fixed  bg-left-top bg-opacity-30",
        date:18,
        month:"Sep",
        year:2022,
        eventdescription:"Hello there game-changers! Are you in need of that gush to win? Get yourself ready and steady to go through the rollercoaster rounds and dive into the world of sports. Indoor, outdoor, National, International and what not.. Interesting and at the same time exciting to finish on time. Grab your gears and get yourself registered as a team of three. Win the four rounds and bag exciting prizes, warriors!",
        numberofrounds:4,
        totalwinners:3,
        firstprizecash:1000 ,
        secondprizecash:600,
        thirdprizecash:400,
        registrationlink:" https://forms.gle/Us9cicYXwwsWMFNy7",
    };
    


    return details;
}

const Thewarriorsleagueroundsdetails=()=>{
    const roundsdetails=[
        {id:"1",btnid:"roundbtn1",onClickfunction:"roundbtnx",roundtitle:"Click Flick",rounddescription:"Testing your knowledge on sports and getting you tensed with time limited quizzes!Random questions on different sports, based on the players, rules and famous taglines!",date:19,month:"Sep",year:2022,modeofevent:"",instructions:false,round4:false},
        {id:"2",btnid:"roundbtn2",onClickfunction:"roundbtny",roundtitle:"Sports and Spices",rounddescription:"Spicy and firey sub rounds to tackle! Images and audio based slides so no fear! Play with what you see and what you hear!",date:20,month:"Sep",year:2022,modeofevent:"",instructions:false},
        {id:"3",btnid:"roundbtn3",onClickfunction:"roundbtnz",roundtitle:"Fast and Furious",rounddescription:"Images will be projected on the screen one by one. One player has to enact seeing the image on the screen and the other two players have to find what the image is. The duration is 90 seconds.",date:24,month:"Sep",year:2022,modeofevent:"",instructions:false},
        {id:"4",btnid:"roundbtn4",onClickfunction:"roundbtnw",roundtitle:"Sportzclazz",rounddescription:"It’s suspenseful! Unraveling of round 4 will happen at the end of round 3.",date:24,month:"Sep",year:2022,modeofevent:""},
    ]
    return roundsdetails;
}

const Thewarriorsleaguecontactdetails=()=>{
    const contactdetails = {
        contactperson1:"Dhamotharan A S",
        contactperson2:"Dhilip Kumar S",
        contact1:"63812 48047",
        contact2:"89405 65633",
        coordinators:["Rajpriya R","Dhamotharan A S","Dhilip Kumar S","Aravinth Bala V S","Manikandan R"],
        contactemail:"thewarriorsleague.gritx5.o@gmail.com",
    }

    return contactdetails;
}

export default {Thewarriorsleaguedetails,Thewarriorsleagueroundsdetails,Thewarriorsleaguecontactdetails};