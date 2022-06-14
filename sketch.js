var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 
boyImg = loadAnimation ("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png");
pathImg = loadImage ("path.png");
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite (200, 200 ,400, 400);
  path.addImage(pathImg);
  path.scale=1.2;


boy = createSprite (200, 190 ,20, 40);
boy.addAnimation ("corriendo", boyImg);
boy.scale=0.8;
  
leftBoundary = createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary = createSprite(410,0,100,800);
rightBoundary.visible = false;

}

function draw() {
  background("White");
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //código para reiniciar el fondo
  if(path.y > 500 ){
    path.y = height/2;
  }
  
  drawSprites();
}
