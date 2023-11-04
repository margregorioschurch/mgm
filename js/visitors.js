const canvas = document.querySelector("#bubble-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bubbleColorString = "rgba(255,242,216,";

let particlesArray;

class Particle{
    constructor(x, y, directionX, directionY, size, color){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    //method to draw individual particle
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        //check if particle is still within canvas
        //if it is too much on the right
        if(this.x > canvas.width){
            //we reset it to the left
            this.x= 0;
        }
        //vice versa
        if(this.x < 0){
            this.x = canvas.width;
        }
        //if it is too much up
        //we reset it at the bottom
        if(this.y < 0){
            this.y = canvas.height;
        }
        //move particle
        // random x direction between -2.5 and 2.5
        let directionX = (Math.random() * 5) -2.5;
        this.x += this.directionX;
        this.y += this.directionY;
        //draw particle
        this.draw();
    }
}

//create particle array
function init(){
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 45000;
    for(let i = 0; i < numberOfParticles; i++){
        // random size between 1 and 52
        let size = (Math.random() * 52) + 1;
        // random x for the spawn point
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2)
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * -2) -1;
        //color
        let color = bubbleColorString + (Math.random() *(0.3 - 0.1) + 0.1)+ ")";
        particlesArray.push(new Particle(x, 921, directionX, directionY, size, color));

    }
}

//animation loop
function animate() {
    //will play this function each frame
    requestAnimationFrame(animate);
    //clear screen
    ctx.clearRect(0,0,innerWidth, innerHeight);
    //update each particle
    for (let i =0; i < particlesArray.length; i++){
        particlesArray[i].update();
    }
}

//recalculate canvas size when resizing the window
window.addEventListener("resize", 
    function(){
        canvas.width=this.innerWidth;
        canvas.height = this.innerHeight;
    })

init();
animate();
//const countEl=document.getElementById("CounterVisitor");function updateVisitCount(){fetch("https://api.countapi.xyz/update/mgm/visits/?amount=1").then(t=>t.json()).then(t=>{countEl.innerHTML=t.value})}updateVisitCount();
