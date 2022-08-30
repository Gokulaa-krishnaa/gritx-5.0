document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#round1').addEventListener('click', myone);
    document.querySelector('#round2').addEventListener('click', mytwo);
    document.querySelector('#round3').addEventListener('click', mythree);
});

function myone() {
    var x = document.getElementById("round1 ");
    var y = document.getElementById("round2 ");
    var z = document.getElementById("round3 ");
    if (x.style.display != "block ") {
        x.style.display = "block ";
        y.style.display = "none ";
        z.style.display = "none ";
    }

}

function mytwo() {
    var x = document.getElementById("round1 ");
    var y = document.getElementById("round2 ");
    var z = document.getElementById("round3 ");
    if (y.style.display != "block ") {
        x.style.display = "none ";
        y.style.display = "block ";
        z.style.display = "none ";
    }
}

function mythree() {
    var x = document.getElementById("round1 ");
    var y = document.getElementById("round2 ");
    var z = document.getElementById("round3 ");
    if (z.style.display != "block ") {
        x.style.display = "none ";
        y.style.display = "none ";
        z.style.display = "block ";
    }
}