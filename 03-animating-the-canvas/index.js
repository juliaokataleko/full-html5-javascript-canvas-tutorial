let canvas = document.querySelector('canvas');

canvas.width = innerWidth
canvas.height = innerHeight 

let c = canvas.getContext('2d');

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

// circle class
function Circle(x, y, dx, dy, radius) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.strokeStyle = "#fff"
        c.stroke()
        c.fill()
        c.fillStyle = "white"
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

        this.draw()
    }
}

let circles = [];

for (let index = 0; index < 1500; index++) {

    let radius = 1;
    let x = Math.random() * (canvas.width - radius * 2) + radius
    let y = Math.random() * (canvas.height - radius*2) + radius
    let dy = (Math.random() - 0.5) * 1;
    let dx = (Math.random() - 0.5) * 1;
    
    circles.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((circle) => {
        circle.update();
    })
}

animate();
