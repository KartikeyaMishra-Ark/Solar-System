const canvas = document.querySelector("#solar-system")
const ctx = canvas.getContext("2d");


let stars = []

function resizeCanvas(){

    canvas.width = window.innerWidth;

    canvas.height =  window.innerHeight;

    createStars();
    drawSpace();
}
function createStars() {
    stars = [];

    for (let i = 0; i < 220; i++) {

        stars.push({


            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            radius: Math.random() * 1.8 + 0.4,
            color: ["#fff0d6", "#ffc86b", "#ff806b", "#a9dccb"][
                Math.floor(Math.random() * 4)
            ]
        });
    }
}
function drawSpace() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    const nebula = ctx.createRadialGradient(

        canvas.width * 0.65,
        canvas.height * 0.55,
        10,

        canvas.width * 0.65,
        canvas.height * 0.55,

        canvas.width * 0.45
    );

    nebula.addColorStop(0, "rgba(100, 73, 135, 0.16)");



    nebula.addColorStop(0.5, "rgba(58, 55, 105, 0.08)");


    nebula.addColorStop(1, "rgba(17, 19, 41, 0)");

    ctx.fillStyle = nebula;



    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {

        ctx.beginPath();

        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;



        ctx.fill();

    });

    drawSolarSystem();

}


const sun = {
    x: 0,
    y: 0,
    radius: 25
}

const orbits = [


    { radius: 45, color: "#ff806b" },
    { radius: 65, color: "#ffc86b" },
    { radius: 90, color: "#a9dccb" },
    { radius: 118, color: "#d7b8f3" },

    { radius: 155, color: "#ff806b" },
    { radius: 195, color: "#ffc86b" },

    { radius: 235, color: "#a9dccb" },
    { radius: 275, color: "#d7b8f3" }

]




function drawSolarSystem() {

    sun.y = canvas.height * 0.52;

    sun.x = canvas.width * 0.62;

    orbits.forEach(orbit => {


        ctx.beginPath();
        ctx.arc(

            sun.x,
            sun.y,
            orbit.radius,
            0,
            Math.PI * 2
        );



        ctx.strokeStyle = orbit.color;
        ctx.globalAlpha = 0.45;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.globalAlpha = 1;

    });



    const glow = ctx.createRadialGradient(
        sun.x, sun.y, 2,

        sun.x, sun.y, sun.radius * 2.5

    );


    glow.addColorStop(0, "rgba(255, 200, 107, 0.4)");
    glow.addColorStop(1, "rgba(255, 128, 107, 0)");

    ctx.fillStyle = glow;

    ctx.beginPath();
    


    ctx.arc(sun.x, sun.y, sun.radius * 2.5, 0, Math.PI * 2);
    ctx.fill();



    ctx.beginPath();
    ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffc86b";
    ctx.fill();
    
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#fff0d6";

    ctx.stroke();

}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();




