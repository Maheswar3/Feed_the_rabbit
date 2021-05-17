  var garden,rabbit;
  var gardenImg,rabbitImg;
  var Leaves,leafImg;
  var apple,appleImg;

  function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    leafImg = loadImage ("leaf.png");
    appleImg = loadImage ("apple.png")
  }

  function setup(){

    createCanvas(400,400);

  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating rabbit running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  }


    function draw() {
      background(0);
      rabbit.x = mouseX;

      edges= createEdgeSprites();
      rabbit.collide(edges);

      drawSprites();
       createLeaves( ) ;
       createApples( ) ;
  }

  function createLeaves(){
      
      if (frameCount % 80 === 0) {

        
   Leaves= createSprite  (random(50,350),40,10,10);
    Leaves.addImage (leafImg)
    Leaves.scale=0.1;
    Leaves.y= Math.round(random(50,350))
    Leaves.velocityY=3;
      }
  }
  function createApples(){
    if (frameCount % 80 === 0) {


              
   apple= createSprite (random(50,350),10,10);
    apple.addImage (appleImg);
    apple.scale=0.1;
    apple.Y= Math.round(random(50,350))
    apple.velocityY=2;
  }
  }