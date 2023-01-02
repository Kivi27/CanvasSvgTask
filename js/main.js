"use strict";

let canvas  = document.querySelector(".canvas-picture__canvas");
canvas.width = window.screen.width;
canvas.height = 700;

const yellowColor = "#FAFA02";
const blueColor = "#42F5EC";
const greenColor = "#42f548";

drawPicture(canvas);

function drawPicture(canvas) {
    const ctx = canvas.getContext("2d");
    const heightLines = [120, 180];
    const countCloud = 6;
    const heightTree = [400, 600];
    const countTree = 6;
    const betweenDistanceDrawObject = 220;

    drawSun(ctx, 0, 0);
    drawClouds(ctx, heightLines, countCloud, betweenDistanceDrawObject);
    drawTrees(ctx, heightTree, countTree, betweenDistanceDrawObject);
    drawBird(ctx, 700, 200);
}

function drawSun(ctx, begX, begY) {
    const radiusSun = 80;

    ctx.fillStyle = yellowColor;
    drawCircle(ctx, begX, begY, radiusSun);
}

function drawClouds(ctx, heightLines, countCloud, betweenDistance) {
    for (let i = 0; i < countCloud; i++) {
        const heightCloud = i % 2 === 0 ? heightLines[0] : heightLines[1];
        drawCloud(ctx, canvas.width - ((i + 1) * betweenDistance), heightCloud);
    }
}

function drawCloud(ctx, begX, begY) {
    const widthCloud = 120;
    const colorCloud = blueColor;
    const bigCircleRadius = 50;
    const smallCircleRadius = 40;
    const offsetCircleSmall = 30;
    const beginXRectangle = begX - 65;
    const  beginYRectangle = begY + 8;
    const heightRectangle = 60;

    ctx.fillStyle = colorCloud;
    drawCircle(ctx, begX, begY, bigCircleRadius);
    drawCircle(ctx, begX - bigCircleRadius, begY + offsetCircleSmall, smallCircleRadius);
    drawCircle(ctx, begX + bigCircleRadius, begY + offsetCircleSmall, smallCircleRadius);
    ctx.fillRect(beginXRectangle, beginYRectangle, widthCloud, heightRectangle);
}

function drawTrees(ctx, heightTree, countTree, betweenDistance) {
    for (let i  = 0; i < countTree; i++) {
        const heightCloud = i % 2 === 0 ? heightTree[0] : heightTree[1];
        drawTree(ctx, canvas.width - ((i + 1) * betweenDistance), heightCloud);
    }
}

function drawTree(ctx, begX, begY) {
    const sizeStem = 100;
    const radiusCrown = 35;
    const smallRadiusCrown = 30;
    const treeCrowns = [
        {offsetX: 0, offsetY: 0, radius: radiusCrown},
        {offsetX: radiusCrown, offsetY: -20, radius: radiusCrown},
        {offsetX: -10, offsetY: -50, radius: smallRadiusCrown},
        {offsetX: 0, offsetY: smallRadiusCrown, radius: radiusCrown},
        {offsetX: -40, offsetY: 0, radius: radiusCrown}
    ];

    ctx.fillStyle = greenColor;
    drawLine(ctx, begX, begY, begX, begY + sizeStem);
    for (let treeCrown of treeCrowns) {
        drawCircle(ctx, begX + treeCrown.offsetX, begY + treeCrown.offsetY, treeCrown.radius);
    }
}

function drawBird(ctx, begX, begY) {
    const radiusHead = 50;
    const radiusEye = 12;
    const widthBeak = 120;
    const AngleBeak = 20;

    ctx.fillStyle = greenColor;
    drawCircle(ctx, begX, begY, radiusHead);
    ctx.fillStyle = blueColor;
    drawCircle(ctx, begX, begY - 10, radiusEye);
    drawLine(ctx, begX - radiusHead, begY, begX - widthBeak, begY + AngleBeak);
    drawLine(ctx, begX - radiusHead + 5, begY + AngleBeak, begX - widthBeak, begY + AngleBeak);
    const centerBodyX = begX + radiusHead + 50;
    const centerBodyY = begY + radiusHead * 2;
    const radiusBodyX = 100;
    const radiusBodyY = 70;
    drawEllipse(ctx, centerBodyX, centerBodyY, radiusBodyX, radiusBodyY, 0.3);
    drawBirdTail(ctx, centerBodyX + 20, radiusBodyX, centerBodyY - 25, radiusBodyY);
    drawBirdPaw(ctx, begX, begY - 10, radiusBodyX, radiusBodyY);
    drawBirdPaw(ctx, begX - 50, begY - 25, radiusBodyX, radiusBodyY);
}

function drawBirdTail(ctx, centerBodyX, radiusBodyX, centerBodyY, radiusBodyY) {
    drawLine(ctx, centerBodyX + radiusBodyX - 26, centerBodyY + radiusBodyY - 20,
        centerBodyX + radiusBodyX + 80, centerBodyY + radiusBodyY - 60);
    drawLine(ctx, centerBodyX + radiusBodyX + 80, centerBodyY + radiusBodyY - 60,
        centerBodyX + radiusBodyX + 10, centerBodyY + radiusBodyY);
    drawLine(ctx, centerBodyX + radiusBodyX + 10, centerBodyY + radiusBodyY,
        centerBodyX + radiusBodyX + 35, centerBodyY + radiusBodyY + 50);
    drawLine(ctx, centerBodyX + radiusBodyX + 35, centerBodyY + radiusBodyY + 50, centerBodyX + radiusBodyX - 40, centerBodyY + radiusBodyY + 10);
}

function drawBirdPaw(ctx, begX, begY, radiusBodyX, radiusBodyY) {
    drawLine(ctx, begX + radiusBodyX, begY + radiusBodyY * 2 + 40, begX + radiusBodyX + 20, begY + radiusBodyY * 2 + 80);
    drawLine(ctx, begX + radiusBodyX + 20, begY + radiusBodyY * 2 + 80, begX + radiusBodyX, begY + radiusBodyY * 2 + 100);
    drawLine(ctx, begX + radiusBodyX, begY + radiusBodyY * 2 + 100, begX + radiusBodyX - 20, begY + radiusBodyY * 2 + 120);
    drawLine(ctx, begX + radiusBodyX, begY + radiusBodyY * 2 + 100, begX + radiusBodyX + 20, begY + radiusBodyY * 2 + 120);
}

function drawCircle(ctx, begX, begY, radius) {
    ctx.beginPath();
    ctx.arc(begX, begY, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function drawLine(ctx, begX, begY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(begX, begY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function drawEllipse(ctx, begX, begY, radiusX, radiusY, rotation) {
    ctx.beginPath();
    ctx.ellipse(begX, begY, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    ctx.fill();
}