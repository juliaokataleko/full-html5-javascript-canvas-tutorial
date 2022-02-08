let canvas = document.querySelector('canvas');

canvas.width = innerWidth
canvas.height = innerHeight

let c = canvas.getContext('2d');
const positionX = canvas.width / 2;

// c.fillStyle = 'rgba(255,0,0,0.4)'
// c.fillRect(100, 100, 100, 100);

// c.fillStyle = 'rgba(0,0,255,0.5)'
// c.fillRect(400, 100, 100, 100);

// c.fillStyle = 'rgba(0,255,0,0.5)'
// c.fillRect(300, 300, 200, 200);

// Line
// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = "#fa34a3"
// c.stroke()

// Arc
// c.beginPath()
// c.arc(300, 300, 30, Math.PI * 2, false);
// c.strokeStyle = "#4834d4"
// c.stroke()

// for (let index = 0; index < 10000; index++) {
//     let x = Math.random() * canvas.width;
//     let y = Math.random() * canvas.height;

//     c.beginPath()
//     c.arc(x, y, 30, Math.PI * 2, false);
//     c.strokeStyle = "#4834d4"
//     c.stroke()
// }

// c.font = '100px arial';
// c.fillStyle = 'white'
// c.fillText("JFK", 300, 420);

let mouse = {
    x: undefined,
    y: undefined
}

let maxRadius = 20;
// let minRadius = 2;

var colorArray = [
    "#ecf0f1",
    "#0652DD",
    "#C4E538",
];

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function (event) {
    canvas.width = innerWidth
    canvas.height = innerHeight
    init();
})

// circle class
function Circle(x, y, dx, dy, radius) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        // c.strokeStyle = "#fff"
        // c.stroke()

        c.fillStyle = this.color
        c.fill()
    }

    this.update = () => {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50
            && mouse.x - this.x > -50
            && mouse.y - this.y < 50
            && mouse.y - this.y > -50
        ) {
            if (this.radius < maxRadius)
                this.radius += 1;
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw()
    }
}


let circles = [];
function init() {

    circles = [];

    for (let index = 0; index < 2500; index++) {

        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (canvas.width - radius * 2) + radius
        let y = Math.random() * (canvas.height - radius * 2) + radius
        let dy = (Math.random() - 0.5) * 1;
        let dx = (Math.random() - 0.5) * 1;

        circles.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((circle) => {
        circle.update();
    })
}

init();
// c.font = '30px serif';
c.direction = 'ltr';
c.textAlign = 'center';
c.fillStyle = '40px #fff';
c.fillText('FC BENGUELA', positionX, 85,);
c.stroke();

animate();
