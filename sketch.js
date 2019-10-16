function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);


}

function draw() {
background(255, 0, 0);
push();

//rotate(x);
//x=x+0,1;
//rotateX(mouseX);
rotateY(30);
rotateZ(5);


translate(30, 20);
fill(20,100,100,20);
stroke(255,255,255);
box(30);
pop();

push();
translate(110, 20);

fill(200,150,20);
sphere(50);
stroke(100,20,100);
pop();
}
