// const boom = document.getElementById("boom");

// boom.addEventListener("click", event =>{
//     boom.style.backgroundColor = "tomato";
//     boom.textContent = "BOOM BOOM 👊";
// })


// boom.addEventListener("mouseout", event =>{
//     boom.textContent = "Boom";
//     boom.style.backgroundColor = "rgba(0,0,0,0.4)";
// })


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    const drumKit = document.querySelector(`.drumKits[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    drumKit.classList.add("playing");

}


function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    // console.log(e.propertyName);
    this.classList.remove("playing");
}
const drumKits = document.querySelectorAll(".drumKits")

drumKits.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

