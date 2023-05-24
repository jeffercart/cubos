let pagina, piso, fondo;
let img, img1, img2, img3, img4, img5, img6;
let c1, c2;
let dispara1, dispara2, dispara3, dispara4;
let x1 = 1;
let x2 = 6;
let x3 = 5;
let k1 = 260;

function preload() {
  soundFormats ('mp3');
  fondo = loadSound("fondo.mp3");
  piso = loadImage("rizomitas.png");
  img = loadImage('IA.png'); 
  img1 = loadImage('img1.png');
  img2 = loadImage('img5.png');
  img3 = loadImage('manos.png');
  img4 = loadImage('neurona.png');
  img5 = loadImage('img2.png');
  img6 = loadImage('img3.png');
  dispara1= loadImage('dispara1.png');
  dispara2= loadImage('dispara2.png');
  dispara3= loadImage('dispara3.png');
  dispara4= loadImage('dispara4.png');
  
}

function setup() {
  createCanvas(1000, 800, WEBGL);
  cam1 = createCamera();
  noCursor();
  pagina=0;
  canvas = document.querySelector('canvas');
  canvas.addEventListener('contextmenu', botonDerecho);
  
}

function draw() {
  background(0);
  firstPerson(cam1);
  push()

  for(let i=-500; i<=500; i+=500){
    for(let a=-250; a<=250; a+=500){
  push();
  noStroke();
  texture(piso);
  translate(a, 200, i);
  rotateX(PI / 2);
  plane(500);
  pop();
  }
  }
  pop();
 
  push();
  translate (0, -300, -1400);
  cubos();
  pop();
  
  push();
  translate (0, -300, 1400);
  rotateY(PI);
  cubos();
  pop();
  
  if (mouseIsPressed== true && mouseButton ==LEFT) {
  push();
  noStroke();
  texture(dispara1);
  translate(-500, -100, 500);
  rotateY(PI/2);
  plane(400);
  pop();

  push();
  noStroke();
  texture(dispara2);
  translate(500, -100, 500);
  rotateY(-PI/2);
  plane(400);
  pop();

  push();
  noStroke();
  texture(dispara3);
  translate(500, -100, -500);
  rotateY(-PI/2);
  plane(400);
  pop();
  
  push();
  noStroke();
  texture(dispara4);
  translate(-500, -100, -500);
  rotateY(PI/2);
  plane(400);
  pop();
  }
  if (frameCount < 30) {
    fondo.setVolume(0.08);
    fondo.loop();
    }
  if (frameCount > 600) {
    if      (pagina == 1){
                window.open("https://editor.p5js.org/diazmaximo2a/full/VlcijYGm3", "_top");} //galeria
    else if (pagina == 2){
               window.open("https://jeffercart.github.io/audio/", "_top");} //audio
    else if (pagina == 3) {
               window.open("https://editor.p5js.org/diazmaximo2a/full/sHf8YxOjK", "_top");}//ojos
    }

}

function arteinter(c1, c2) {
  stroke(0);
  push();
    rotateY(x1 * frameCount * 0.01);
    rotateZ(x1 * frameCount * 0.01);
    texture(img);
    box(c1);
  pop();
  
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, 0, -k1 * sin(x3 * frameCount * 0.001));
    texture(img1);
    box(c2);
  pop();

  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, 0, k1 * sin(x3 * frameCount * 0.001));
    texture(img2);
    box(c2);
  pop();
  
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, -k1 * sin(x3 * frameCount * 0.001), 0);
    texture(img3);
    box(c2);
  pop();
 
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, k1 * sin(x3 * frameCount * 0.001), 0);
    texture(img4);
    box(c2);
  pop();
  
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(-k1 * sin(x3 * frameCount * 0.001), 0, 0);
    texture(img5);
    box(c2);
  pop();
  
  push();
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(k1 * sin(x3 * frameCount * 0.001), 0, 0);
    texture(img6);
    box(c2);
  pop();
  
}
function firstPerson(cam){
  cam.firstPersonState = cam.firstPersonState || {
    azimuth: -atan2(cam.eyeZ - cam.centerZ, cam.eyeX - cam.centerX),
    zenith: -atan2(cam.eyeY - cam.centerY, dist(cam.eyeX, cam.eyeZ, cam.centerX, cam.centerZ)),
    lookAtDist: dist(cam.eyeX, cam.eyeY, cam.eyeZ, cam.centerX, cam.centerY, cam.centerZ),
    mousePrevX: mouseX,
    mousePrevY: mouseY
  }
  
  // Look around controls
  cam.firstPersonState.azimuth -= (mouseX - cam.firstPersonState.mousePrevX) / 100;
  if(abs(cam.firstPersonState.zenith + (mouseY - cam.firstPersonState.mousePrevY) / 100) < PI/2) cam.firstPersonState.zenith += (mouseY - cam.firstPersonState.mousePrevY) / 100;
  
  // Movement controls
  if(keyIsPressed && keyCode == 87 || keyIsDown(UP_ARROW)){
    cam.eyeX -= 12 * cos(cam.firstPersonState.azimuth)
    cam.eyeZ += 12 * sin(cam.firstPersonState.azimuth)
  }
  if(keyIsPressed && keyCode == 83 || keyIsDown(DOWN_ARROW)){
    cam.eyeX += 12 * cos(cam.firstPersonState.azimuth)
    cam.eyeZ -= 12 * sin(cam.firstPersonState.azimuth)
  }
  if(keyIsPressed && keyCode == 65 || keyIsDown(LEFT_ARROW)){
    cam.eyeX -= 12 * cos(cam.firstPersonState.azimuth + PI/2)
    cam.eyeZ += 12 * sin(cam.firstPersonState.azimuth + PI/2)
  }
  if(keyIsPressed && keyCode == 68 || keyIsDown(RIGHT_ARROW)){
    cam.eyeX += 12 * cos(cam.firstPersonState.azimuth + PI/2)
    cam.eyeZ -= 12 * sin(cam.firstPersonState.azimuth + PI/2)
  }
  
  // Update previous mouse position
  cam.firstPersonState.mousePrevX = mouseX;
  cam.firstPersonState.mousePrevY = mouseY;
  
  // Update the look-at point
  cam.centerX = cam.eyeX - cam.firstPersonState.lookAtDist * cos(cam.firstPersonState.zenith) * cos(cam.firstPersonState.azimuth);
  cam.centerY = cam.eyeY + cam.firstPersonState.lookAtDist * sin(cam.firstPersonState.zenith);
  cam.centerZ = cam.eyeZ + cam.firstPersonState.lookAtDist * cos(cam.firstPersonState.zenith) * sin(cam.firstPersonState.azimuth);
  
  // Call the built in p5 function 'camera' to position and orient the camera
  camera(cam.eyeX, cam.eyeY, cam.eyeZ,  // position
         cam.centerX, cam.centerY, cam.centerZ,  // look-at
         0, 1, 0)  // up vector
}


function cubos(){
  push();
  translate(0, 0, 100);
  arteinter(50, 80);
  pop();
 
  push();
  translate(300, 250, -450);
  arteinter(50, 80);
  pop();

  push();
  translate(300, -250, -450);
  arteinter(50, 80);
  pop();

  push();
  translate(-300, -250, -450);
  arteinter(50, 80);
  pop();

  push();
  translate(-300, 250, -450);
  arteinter(50, 80);
  pop();

  push();
  translate(-700, 0, -1250);
  arteinter(50, 80);
  pop();

  push();
  translate(700, 0, -1250);
  arteinter(50, 80);
  pop();
}

function botonDerecho(event) {
  // Evitar que aparezca el menú contextual del botón derecho del mouse
  event.preventDefault();

  // Acciones a realizar cuando se hace clic con el botón derecho
  pagina = floor(random(4));
}
