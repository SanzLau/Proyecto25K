/*Hola Kami, agregue algunos comentarios y algunas líneas 
de código que estaban incorrectas las volví comentarios 
y puse la línea de código correcta*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
/*Te faltaba crear la variable de paperO y le agregue una O al final
para que no fuera igual al nombre de la clase */
var dustbinObj,groundObject, paperO;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	//Cambie los valores y subi la línea de código.
	paperO = new Paper(200, 450, 70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	
	//paper = new Paper(300, 200, 15);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
	//Render
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paperO.display();
  dustbinObj.display();

}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		//Solo sería "paperO" por que tu así nombraste a tu variable.
		Matter.Body.applyForce(paperO.body,paperO.body.position,{x:130,y:-145});
		//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}
}


