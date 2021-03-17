const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, boxx14, box15, box16, box17, box18, box19, box20;
var groundImg

function preload(){
    backgroundImg = loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1515, 725);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(800,100,70,70);
    block2 = new Block(800,100,70,70);
    block3 = new Block(800,100,70,70);
    block4 = new Block(800,100,70,70);
    block5 = new Block(800,100,70,70);
    block6 = new Block(800,100,70,70);

    block7= new Block(700, 100, 70, 70);
    block8= new Block(700, 100, 70, 70);
    block9= new Block(700, 100, 70, 70);
    block10= new Block(700, 100, 70, 70);
    block11= new Block(700, 100, 70, 70);
    block12= new Block(700, 100, 70, 70);

    block13 = new Block(600, 100, 70, 70);
    block14 = new Block(600, 100, 70, 70);
    block15 = new Block(600, 100, 70, 70);
    block16 = new Block(600, 100, 70, 70);
    block17 = new Block(600, 100, 70, 70);
    block18 = new Block(600, 100, 70, 70);
    block19 = new Block(600, 100, 70, 70);
    block20 = new Block(600, 100, 70, 70);

    

    groundImg = new ground(0, 600, width+width/2+90, 25);

    monster = new Monster(1100, 500, 200)

    hero = new Hero(200, 200, 80);

    rope = new fly(hero.body, {x:300, y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();


    hero.display();

    monster.display();

    groundImg.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}