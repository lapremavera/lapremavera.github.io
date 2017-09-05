function draw() {
    var canvas = document.getElementById('vorm');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.strokeStyle ="black";
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();
    }
}







