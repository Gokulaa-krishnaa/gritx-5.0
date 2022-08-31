import React, { useState }  from "react";
import './index.css';


function App(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const handleClickOpen1=()=>{
        setPop(!popup)
    }
    const handleClickOpen2=()=>{
        setPop(!popup)
    }
    const handleClickOpen3=()=>{
        setPop(!popup)
    }
    const handleClickOpen4=()=>{
        setPop(!popup)
    }
    const handleClickOpen5=()=>{
        setPop(!popup)
    }

    /*const closePopup=()=>{
        setPop(false)
    }*/
    var modalBtns=document.querySelectorAll('.modal-open');
modalBtns.forEach(function(btn) {
    btn.onclick= function() {
        var modal=btn.getAttribute('data-modal'); 
        document.getElementById(modal).style.display='block';
    };
});

var closeBtns = document.querySelectorAll('.modal-close');
closeBtns.forEach(function(btn){
    btn.onclick =function(){
        var modal =btn.closest(".modal").style.display ='none';
    };
});
window.onclick =function(e){
    if(e.target.className == 'modal'){
        e.target.style.display = 'none';
    }
};
    return(
          <div>
        <div> 
          <div>
              <div class="g1"></div>
    <button class="modal-open"id="dates" data-modal="modal1"onClick={handleClickOpen}>24th Sept</button>
    <button class="modal-open" id="dates1" data-modal="modal2" onClick={handleClickOpen1}>25th Sept</button>
    <button class="modal-open" id="dates2" data-modal="modal3"onClick={handleClickOpen2}>26th Sept</button>
    <button class="modal-open" id="dates3" data-modal="modal4"onClick={handleClickOpen3}>27th Sept</button>
    <button class="modal-open" id="dates4"  data-modal="modal5" onClick={handleClickOpen4}>28th Sept</button>
    <button class="modal-open" id="dates5" data-modal="modal6" onClick={handleClickOpen5}>29th Sept</button>

    <div class="modal" id="modal1">
        <div class="modal-content">
            <div class="modal-header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIND TWISTERS 
            <button class="icon modal-close"><i class="material-icons">close</i></button>
            </div>
            <div class="modal-body"><p><b>ROUND 1:</b><br></br>Timings:&nbsp; 10AM to 12PM</p></div>
            <div class="modal-footer"><button class="link modal-close">close</button></div>
        </div>
    </div>

    <div class="modal" id="modal2">
        <div class="modal-content">
            <div class="modal-header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DAZLE PLAY 
            <button class="icon modal-close"><i class="material-icons">close</i></button>
            </div>
            <div class="modal-body"><p><b>ROUND 2:</b><br></br> Timings:&nbsp; 12PM to 2PM</p></div>
            <div class="modal-footer"><button class="link modal-close">close</button></div>
        </div>
    </div>

    <div class="modal" id="modal3">
        <div class="modal-content">
            <div class="modal-header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FUN GAME
            <button class="icon modal-close"><i class="material-icons">close</i></button>
            </div>
            <div class="modal-body"><p><b>ROUND 3:<br></br></b>Timings:&nbsp; 10AM to 12PM</p></div>
            <div class="modal-footer"><button class="link modal-close">close</button></div>
        </div>
    </div>

    <div class="modal" id="modal4">
        <div class="modal-content">
            <div class="modal-header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TREASURE HUNT
            <button class="icon modal-close"><i class="material-icons">close</i></button>
            </div>
            <div class="modal-body"><p><b>ROUND 1:<br></br></b>Timings:&nbsp; 10AM to 11AM</p></div>
            <div class="modal-footer"><button class="link modal-close">close</button></div>
        </div>
    </div>

    <div class="modal" id="modal5">
        <div class="modal-content">
            <div class="modal-header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SQUID GAME 
            <button class="icon modal-close"><i class="material-icons">close</i></button>
            </div>
            <div class="modal-body"><p><b>ROUND 1:</b><br></br>Timings:&nbsp; 10AM to 12PM</p></div>
            <div class="modal-footer"><button class="link modal-close">close</button></div>
        </div>
    </div>

    <div class="modal" id="modal6">
        <div class="modal-content">
            <div class="modal-header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DAZZLE PLAY
            <button class="icon modal-close"><i class="material-icons">close</i></button>
            </div>
            <div class="modal-body"><p><b>ROUND 3:</b><br></br>Timings:&nbsp; 10AM to 1PM</p></div>
            <div class="modal-footer"><button class="link modal-close">close</button></div>
        </div>
    </div>
           
 </div>
    <div class="boxx"></div>
</div>
</div>

    )
}

export default App;


