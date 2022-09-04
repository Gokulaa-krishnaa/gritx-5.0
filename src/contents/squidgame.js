const Squidgamedetails= () =>{
    
    const details={
        eventfirstname:"Squid",
        eventlastname:"Game",
        // eventtagline:"The picture that you took with your camera is the imagination you want to create with reality",
        overallclass:"bg-squidgamebg bg-contain bg-no-repeat bg-fixed  bg-left-top bg-opacity-30",
        date:22,
        month:"Sep",
        year:2022,
        eventdescription:"A daring game that definitely makes you thrilled to bits! There are three levels of adventure that one needs to surpass with a strong will to grab the bull’s eye!Just have a hand in with your fellow mates to make a feat! Fling your abilities with a short rapid-fire .Get ready for some adrenaline rush through you!!",
        numberofrounds:3,
        totalwinners:3,
        firstprizecash:1250,
        issecondprizecash:true,
        secondprizecash:750,
        thirdprizecash:500,
        registrationlink:"https://forms.gle/xLYEEubxtQc9k4Nx5",
    };
    


    return details;
}

const Squidgameroundsdetails=()=>{
    const roundsdetails=[
        {id:"1",btnid:"roundbtn1",onClickfunction:"roundbtnx",roundtitle:"All in All",rounddescription:"This round is completely fun-filled and tests your mental and physical abilities.The participating team consists of two members .One of the team members will be participating here..The participant will take part in different sets of games based on your choice.Apply your strategies to win this round!",date:24,month:"Sep",year:2022,modeofevent:"Offline",instructions:false},
        {id:"2",btnid:"roundbtn2",onClickfunction:"roundbtny",roundtitle:"Focused on fun",rounddescription:"Spell the twister right after some light. Gear up to play a game which ties you up in knots",date:24,month:"Sep",year:2022,modeofevent:"Offline",instructions:false},
        {id:"3",btnid:"roundbtn3",onClickfunction:"roundbtnz",roundtitle:"The Untouchables",rounddescription:"Have a clear vision to hold the key !!Think out of the box and improve your frisking skills with your twinning partner!! ",date:24,month:"Sep",year:2022,modeofevent:"Offline",instructions:false},
    ]
    return roundsdetails;
}

const Squidgamecontactdetails=()=>{
    const contactdetails = {
        contactperson1:"Jeeva S",
        contactperson2:"Santhosh P",
        contactperson3:"Sriram ",
        contact1:"98408303435",
        contact2:"7639398283",
        contact3:"9894190023",
        coordinators:["Jeeva S","Santhosh P","Sriram ","Dishni Priya J","Aarthi Lakshmi R"],
        contactemail:"squidgame.gritx5.0@gmail.com",
    }

    return contactdetails;
}

export default {Squidgamedetails,Squidgameroundsdetails,Squidgamecontactdetails};