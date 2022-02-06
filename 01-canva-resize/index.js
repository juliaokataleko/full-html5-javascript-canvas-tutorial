let canvas = document.querySelector('canvas');

canvas.width = 800
canvas.height = 800

let c = canvas.getContext('2d');

c.font = '60px arial';
c.fillText('JFK Kataleko', 50, 150);
c.fillText('Floripa Kataleko', 50, 350);
c.fillText('Isabel C. Kataleko', 50, 550);

c.fillStyle = "rgba(255,0,0,0.5)"
c.fillRect(100, 84, 500, 100);

c.fillStyle = "rgba(0,255,0,0.5)"
c.fillRect(100, 284, 500, 100);

c.fillStyle = "rgba(255,255,0,0.6)"
c.fillRect(100, 484, 500, 100);
