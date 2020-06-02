const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,800);
  breaker= new Breaker(200,800,45);
  sling= new Sling(breaker.body,{x:200,y:450})
  ground= new Ground(800,500,500,30);
  box1= new Box(800,470,40,40)
  box2= new Box(760,470,40,40)
  box3= new Box(720,470,40,40)
  box4= new Box(680,470,40,40)
  box5= new Box(640,470,40,40)
  box6= new Box(600,470,40,40)
  box7= new Box(840,470,40,40)
  box8= new Box(880,470,40,40)
  box9= new Box(920,470,40,40)
  box10= new Box(960,470,40,40)
  box11= new Box(1000,470,40,40)
  box12= new Box(960,470,40,40)
  box13= new Box(920,470,40,40)
  box14= new Box(880,470,40,40)
  box15= new Box(840,470,40,40)
  box16= new Box(800,470,40,40)
  box17= new Box(760,470,40,40)
  box18= new Box(720,470,40,40)
  box19= new Box(680,470,40,40)
  box20= new Box(640,470,40,40)
  box21= new Box(680,470,40,40)
  box22= new Box(720,470,40,40)
  box23= new Box(760,470,40,40)
  box24= new Box(800,470,40,40)
  box25= new Box(840,470,40,40)
  box26= new Box(880,470,40,40)
  box27= new Box(920,470,40,40)
  box28= new Box(720,470,40,40)
  box29= new Box(760,470,40,40)
  box30= new Box(800,470,40,40)
  box31= new Box(840,470,40,40)
  box32= new Box(880,470,40,40)
  box33= new Box(840,470,40,40)
  box34= new Box(800,470,40,40)
  box35= new Box(760,470,40,40)
  box36= new Box(800,470,40,40)
}

function draw() {
  background(0,255,230);  
  Engine.update(engine);
  breaker.display();
  sling.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  drawSprites();
}

function mouseDragged() {
  breaker.body.position.x=mouseX
  breaker.body.position.y=mouseY
}

function mouseReleased() {
  sling.freedom()
}
