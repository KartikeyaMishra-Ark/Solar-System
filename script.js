const canvas = document.querySelector("#solar-system")
const ctx = canvas.getContext("2d");
let paused = false;

let stars = []


let selectedPlanet = null;

const BASE_OUTER_ORBIT = 275;
const BASE_SUN_RADIUS = 25;

let systemScale = 1;

function updateSystemScale() {

    systemScale = Math.min(

        canvas.width * 0.44 / BASE_OUTER_ORBIT,
        canvas.height * 0.44 / (BASE_OUTER_ORBIT * 0.72)
    )
}
function drawPlanetSurface(planet, x, y) {
    const r = planet.radius;

    ctx.save()

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.clip()

    ctx.fillStyle = planet.color;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);

    
    if (planet.name === "Earth") {

        ctx.fillStyle = "#287eb0";

        ctx.fillRect(x - r, y - r, r * 2, r * 2)

        ctx.fillStyle = "#78bd78";



        for (const [dx, dy, w, h] of [

            [-0.35, -0.35, 0.65, 0.4],
            [0.25, 0.05, 0.55, 0.7],
            [-0.45, 0.4, 0.3, 0.35]

        ]) {

            ctx.beginPath();
            ctx.ellipse(
                x + dx * r,
                y + dy * r,
                w * r,
                h * r,
                -0.5,

                0,
                Math.PI * 2
            );
            ctx.fill();

        }
    }

    if (["Jupiter", "Saturn"].includes(planet.name)) {
        const bands = planet.name === "Jupiter"

            ? ["#b87555", "#f1d0a0", "#a85f48", "#e8bd8b"]
            : ["#c6a878", "#f1dfb5", "#ad9367"];


        bands.forEach((color, i) => {
            ctx.fillStyle = color;

            ctx.globalAlpha = 0.85;

            ctx.beginPath();

            ctx.ellipse(
                x,
                y - r + (i + 1) * r * 0.45,
                r * 1.2, 
                r * 0.16,
                0,
                0,
                Math.PI * 2

            )


            ctx.fill();
        });

        ctx.globalAlpha = 1;



    if (planet.name === " Jupiter") {

            ctx.beginPath();

            ctx.ellipse(
                x + r * 0.35,
                y + r * 0.2,
                r * 0.22,
                r * 0.13,
                -0.15,
                0,

                Math.PI * 2
            );

            ctx.fillStyle = "#b94e3e";
            ctx.fill();

            
        }
    }

    if (planet.name === "Mars") {

        for (let i = 0; i < 5; i++) {
            ctx.beginPath();


            ctx.ellipse(
                x + Math.sin(i * 4.1) * r * 0.55,
                y + Math.cos(i * 2.7) * r * 0.55,
                r * 0.2,
                r * 0.12,
                i,
                0,
                Math.PI * 2
            );        
            ctx.fillStyle = "#b95743";
            ctx.fill();
        }
    }
    if (planet.name === "Mercury") {


        for (let i = 0; i < 6; i++) {
            const cx = x + Math.sin(i * 7.1) * r * 0.65;
            const cy = y + Math.cos(i * 4.3) * r * 0.65
            const cr = r * (0.12 + (i % 3) * 0.07)

            ctx.beginPath()

            ctx.arc(cx, cy, cr, 0, Math.PI * 2)
            ctx.fillStyle = "#91877d";
            ctx.fill()

            ctx.beginPath()
            ctx.arc(cx - cr * 0.2, cy - cr * 0.2, cr * 0.65, 0, Math.PI * 2);
            ctx.strokeStyle = "#e0d5c6";

            ctx.lineWidth = 0.6;
            ctx.stroke()
        }

    }

    if (["Uranus", "Neptune"].includes(planet.name)) {
        for (let i = 0; i < 4; i++) {
            ctx.fillStyle = "#ffffff"
            ctx.globalAlpha = 0.12;

            ctx.fillRect(

                x - r,
                y - r + i * r * 0.55,
                r * 2,
                r * 0.12

            )
        }

        ctx.globalAlpha = 1;
    }
    const light = ctx.createRadialGradient(

        x - r * 0.38,
        y - r * 0.42,

        r * 0.05,
        x + r * 0.25,
        y + r * 0.2,
        r * 1.25

    )


    light.addColorStop(0, "rgba(255,255,255,0.45)");
    light.addColorStop(0.35, "rgba(255,255,255,0.05)")
    light.addColorStop(1, "rgba(5,5,20,0.72)");

    ctx.fillStyle = light

    ctx.fillRect(x - r, y - r, r * 2, r * 2);

    ctx.restore();
    ctx.beginPath()

    ctx.arc(x, y, r, 0, Math.PI * 2)


    ctx.strokeStyle = "rgba(255,240,214,0.45)";
    ctx.lineWidth = 0.8
    ctx.stroke();

}




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

    nebula.addColorStop(0, "rgba(100, 73, 135, 0.16)")
    nebula.addColorStop(0.5, "rgba(58, 55, 105, 0.08)")

    nebula.addColorStop(1, "rgba(17, 19, 41, 0)");

    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {

        ctx.beginPath()

        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color


        ctx.fill()


    })
    drawSolarSystem();  
    drawPlanets()

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

const planets = [
    { name: "Mercury", radius: 4, color: "#c5b8a8", speed: 1.6, orbit: 45, angle: Math.random() * Math.PI * 2 },
    { name: "Venus",   radius: 7, color: "#ffc86b", speed: 1.2, orbit: 65, angle: Math.random() * Math.PI * 2 },
    { name: "Earth",   radius: 7, color: "#72c8ed", speed: 1.0, orbit: 90, angle: Math.random() * Math.PI * 2 },

    { name: "Mars",    radius: 5, color: "#ff806b", speed: 0.8, orbit: 118, angle: Math.random() * Math.PI * 2 },
    { name: "Jupiter", radius: 13, color: "#e8b18b", speed: 0.45, orbit: 155, angle: Math.random() * Math.PI * 2 },
    { name: "Saturn",  radius: 11, color: "#e8d49a", speed: 0.32, orbit: 195, angle: Math.random() * Math.PI * 2 },
    { name: "Uranus",  radius: 8, color: "#a9dccb", speed: 0.22, orbit: 235, angle: Math.random() * Math.PI * 2 },
    { name: "Neptune", radius: 8, color: "#8c9cff", speed: 0.16, orbit: 275, angle: Math.random() * Math.PI * 2 }


];


function drawSolarSystem() { 

    sun.y = canvas.height * 0.52;

    sun.x = canvas.width * 0.62;

    orbits.forEach((orbit, index) => {
        
        ctx.beginPath();
        ctx.save();

        ctx.translate(sun.x, sun.y);

    
        const tilt = -0.12 + index * 0.035;

        ctx.rotate(tilt);
        ctx.scale(1, 0.72);
        ctx.arc(

            0,
            0,
            orbit.radius,           
            0,
            Math.PI * 2

        )

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = orbit.color;
        ctx.globalAlpha = 0.45; 
        
        ctx.stroke();
        ctx.restore();

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
function drawPlanets() {

    planets.forEach((planet, index) => {
        const tilt = -0.12 + index * 0.035;

        const angle = planet.angle

        const y = planet.orbit * Math.sin(angle) * 0.72;
        const x = planet.orbit * Math.cos(angle)

        
        const tiltedX = x * Math.cos(tilt) - y * Math.sin(tilt)
        const tiltedY = x * Math.sin(tilt) + y * Math.cos(tilt)

       
        ctx.beginPath();
        const planetX = sun.x + tiltedX
        const planetY = sun.y + tiltedY;

        planet.screenX = planetX;
        planet.screenY = planetY

        drawPlanetSurface(planet, planetX, planetY);
           
    
        
        if (planet.name === "Saturn") {
            ctx.beginPath();

            ctx.ellipse(
                sun.x + tiltedX,
                sun.y + tiltedY,
                planet.radius * 1.8,
                planet.radius * 0.65,
                tilt - 0.3,
                0,
                Math.PI * 2
            )

            ctx.strokeStyle = "#fff0d6"
            ctx.lineWidth = 3

            ctx.globalAlpha = 0.85;
            ctx.stroke()
            
            ctx.globalAlpha = 1;
        }
                
        if (planet.name === "Earth") {

            const moonAngle = planet.angle * 4;
            const moonX = sun.x + tiltedX + Math.cos(moonAngle) * 12
            const moonY = sun.y + tiltedY + Math.sin(moonAngle) * 12;

            ctx.beginPath()

            ctx.arc(moonX, moonY, 2, 0, Math.PI * 2)
            ctx.fillStyle = "#fff0d6"

            ctx.fill()
        }
        if (planet === selectedPlanet) {
            ctx.beginPath();
            ctx.arc(
                planet.screenX,
                planet.screenY,
                planet.radius + 5,
                0,
                Math.PI * 2
            );

            ctx.strokeStyle = "#fff0d6";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
    });
}


let lastTime = 0;

function animate(time = 0) {
    const deltaTime = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;
    if(!paused)
    {
        planets.forEach(planet => {
            planet.angle += planet.speed * deltaTime
        })
    }
    drawSpace()

    requestAnimationFrame(animate)
}


const pauseButton = document.querySelector("#pause");


pauseButton.addEventListener("click", () => {
    paused = !paused

    pauseButton.textContent = paused ? "RESUME" : "PAUSE";

})


canvas.addEventListener("click", event => {
    const rect = canvas.getBoundingClientRect();

    const mouseX = (event.clientX - rect.left) * canvas.width / rect.width;
    const mouseY = (event.clientY - rect.top) * canvas.height / rect.height;

    selectedPlanet = [...planets].reverse().find(planet => {
        const dx = mouseX - planet.screenX;
        const dy = mouseY - planet.screenY;

        return Math.hypot(dx, dy) < planet.radius + 15
    }) ?? null;

    updateInfoPanel()
})

function updateInfoPanel() {
    const panel = document.querySelector("#selected-planet");

    if (!selectedPlanet) {
        panel.textContent = "SYSTEM VIEW";
        return
    }

    panel.textContent = selectedPlanet.name.toUpperCase()
}



window.addEventListener("resize", resizeCanvas)

resizeCanvas(); 
requestAnimationFrame(animate);