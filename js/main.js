let canvas  = document.querySelector(".canvas-picture__canvas");

function drawCanvas(canvas) {
    let ctx = canvas.getContext("2d");
    drawSun(ctx);
}

function drawSun(ctx, begX, begY) {
    ctx.arc(begX, begY, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();

}

drawCanvas(canvas);