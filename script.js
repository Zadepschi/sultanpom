



let imgMoving = window.innerWidth - document.querySelector(".kartinka").clientWidth;


gsap.registerPlugin(ScrollTrigger);

function x(){
     gsap.fromTo(".kartinka", {x:imgMoving}, {x:-imgMoving, duration: 5, delay: 0.5})
     setTimeout(y, 2000);
}
x();

function y(){
gsap.to(".kartinka", {opacity: 0, delay: 2})

}


gsap.from(".img", { scrollTrigger:{trigger: ".img", toggleActions: "restart"}, y: 10, opacity: 0, duration: 2, delay:3.5})

gsap.from(".btnCalculator", {opacity: 0, duration: .5, delay:3.5, y: -100})
gsap.from(".btnReservation", {opacity: 0, duration: .5, delay:4.5, rotate: 360})


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtnUp").style.display = "block";
    } else {
        document.getElementById("myBtnUp").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Bubble

function createBubble(){
    const bubbles = document.querySelector('.bubbles');
    const createElement = document.createElement('span');
    let size = Math.random() * 60;


    createElement.style.width = 20 + size  + "px";
    createElement.style.height = 20 + size  + "px";
    createElement.style.left = Math.random() * innerWidth + "px";
    bubbles.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000)
}
setInterval(createBubble,50);

//bubble2
function createBubbleTwo(){
    const bubblesTwo = document.querySelector('.bubblesTwo');
    const createElement = document.createElement('span');
    let size = Math.random() * 60;


    createElement.style.width = 20 + size  + "px";
    createElement.style.height = 20 + size  + "px";
    createElement.style.left = Math.random() * innerWidth + "px";
    bubblesTwo.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000)
}
setInterval(createBubbleTwo,50);

//bubble3
function createBubbleThree(){
    const bubblesTwo = document.querySelector('.bubblesThree');
    const createElement = document.createElement('span');
    let size = Math.random() * 60;


    createElement.style.width = 20 + size  + "px";
    createElement.style.height = 20 + size  + "px";
    createElement.style.left = Math.random() * innerWidth + "px";
    bubblesTwo.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000)
}
setInterval(createBubbleThree,50);
