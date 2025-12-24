// const g_Button = document.getElementById("g_buttonW");
// const jesus_opc = document.getElementById("jesus");

// var opc = 0;

// g_Button.addEventListener("mouseover", () => {
//     const x = Math.floor(Math.random() * 300)
//     const y = Math.floor(Math.random() * 300)
    
//     opc = opc + 3.0;
//     jesus_opc.style.opacity = `${opc}%`;

//     g_Button.style.left = `${x}px`;
//     g_Button.style.top= `${y}px`;})


const flipButton = document.getElementById("button1");
const face_1 = document.getElementById("content");
const body = document.getElementById("body1");
const blow = document.getElementById("blow");
const blow_3 = document.getElementById("blow_3");
const flambe = document.getElementById("f_2");
const flambe_2 = document.getElementById("f_22");
const flambe_22 = document.getElementById("f_222");
const confettiWrapper = document.querySelector('.confetti-wrapper');
const ltrBox = document.getElementById("ltrBox")





flipButton.addEventListener("click",function(){
    face_1.classList.add('flipped');
    body.classList.add('darkBG');
})

blow.addEventListener("click",function(){
    blow.classList.add('gyb')
    blow_3.classList.remove('gyb')
    flambe.classList.remove('flame');
    flambe.classList.add('flame_2');
    flambe_2.classList.remove('flame');
    flambe_2.classList.add('flame_2');
    flambe_22.classList.remove('flame');
    flambe_22.classList.add('flame_2');

})

blow_3.addEventListener("click",function(){
    body.classList.add("last");
    blow_3.classList.add("nybtn");
    blow_3.textContent = "Happy Birthday Riya !!!";
    flambe.classList.remove('flame_2');
    flambe_2.classList.remove('flame_2');
    flambe_22.classList.remove('flame_2');
    

    for (let i = 0; i < 50; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti-piece');
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.setProperty('--fall-duration', `${Math.random() * 3 + 3}s`);
  confetti.style.setProperty('--confetti-color', getRandomColor());
  confettiWrapper.appendChild(confetti);
}
function getRandomColor() {
  const colors = ['#ff6347', '#ffa500', '#32cd32', '#1e90ff', '#ff69b4'];
  return colors[Math.floor(Math.random() * colors.length)];
}
})




