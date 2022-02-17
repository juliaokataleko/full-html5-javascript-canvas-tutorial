import utils, { randomColor, randomIntFromRange } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = [
    '#2185C5',
    '#7ECEFD',
    '#FFF6E5',
    '#FF7F66',
    '#5f27cd',
    '#ee5253',
    '#10ac84',
    '#feca57'
]
let gravity = 1;
let friction = 0.9;

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

addEventListener('click', () => {
    init();
})

// Objects
class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x
        this.y = y
        this.dx = dx;
        this.dy = dy;
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.stroke()
        c.closePath()
    }

    update() {
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
            console.log(this.dy);
        }

        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw()
    }
}

// Implementation
let balls = []
let ball;

function init() {

    balls = []

    for (let i = 0; i < 100; i++) {

        let radius = randomIntFromRange(8, 30)
        let x = randomIntFromRange(0, canvas.width - radius)
        let y = randomIntFromRange(0, canvas.height - radius)
        let dx = randomIntFromRange(-2, 2);
        let dy = randomIntFromRange(-2, 2);
        let color = randomColor(colors);

        ball = new Ball(x, y, dx, dy, radius, color);
        balls.push(ball)
    }

}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    balls.forEach(ball => {
            ball.update();
            console.log(ball);
        })
        // ball.update();
}

init()
animate()