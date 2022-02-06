let canvas = document.querySelector('canvas');

canvas.width = 800
canvas.height = 800

let c = canvas.getContext('2d');

c.fillStyle = 'rgba(255,0,0,0.4)'
c.fillRect(100, 100, 100, 100);

c.fillStyle = 'rgba(0,0,255,0.5)'
c.fillRect(400, 100, 100, 100);

c.fillStyle = 'rgba(0,255,0,0.5)'
c.fillRect(300, 300, 200, 200);

// Line
c.beginPath()
c.moveTo(50, 300)
c.lineTo(300, 100)
c.lineTo(400, 300)
c.strokeStyle = "#fa34a3"
c.stroke()

// Arc
// c.beginPath()
// c.arc(300, 300, 30, Math.PI * 2, false);
// c.strokeStyle = "#4834d4"
// c.stroke()

for (let index = 0; index < 1000; index++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    c.beginPath()
    c.arc(x, y, 30, Math.PI * 2, false);
    c.strokeStyle = "#4834d4"
    c.stroke()
}
