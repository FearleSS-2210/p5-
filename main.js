function preload(){}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(300, 300);
    video = createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 300, 100, 250, 250);

    fill(3, 252, 232);
    stroke(3, 252, 232);
    circle(300, 400, 50);

    fill(3, 252, 232);
    stroke(3, 252, 232);
    circle(550, 400, 50);

    fill(3, 252, 232);
    stroke(3, 252, 232);
    circle(300, 50, 50);

    fill(3, 252, 232);
    stroke(3, 252, 232);
    circle(550, 50, 50);

    fill(0, 0, 0, 0, 0);
    stroke(3, 252, 232);
    square(250, 50, 350);

    fill(0, 0, 0, 0, 0);
    stroke(3, 252, 232);
    square(275, 75, 300);
}

function Take_snapshot() {
    save('you.png');
}