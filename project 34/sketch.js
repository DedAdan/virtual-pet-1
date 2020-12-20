//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
	happyDogImage=loadImage("happydog.png")
  dogImage=loadImage("Dog.png")
}

function setup() {
	createCanvas(1000, 800);
 
  dog = createSprite(500, 500)
  dog.addImage(dogImage)
  dog.scale=0.5
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}



function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImage)
}
  drawSprites();
  //add styles here
  textSize(32);
  text('Tip: Press the up arrow to feed the dog :)', 10, 30);
  fill("blue");
}




function readStock(data){
  foodS=data.val();
}


function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}