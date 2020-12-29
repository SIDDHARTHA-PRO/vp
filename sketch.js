var dog,database,foodstock,happydog,foodS
function preload()
{
dogImage=loadImage("images/dogImg1.png")
dogHappyImg=loadImage("images/dogImg.png")
}

function setup() {

  database=firebase.database();
  createCanvas(500, 500);
  foodstock=database.ref('Food')
  foodstock.on("value",readstock)
  dog=createSprite(250,390)
  dog.addImage(dogImage)
  dog.scale=0.4
}


function draw() {  
background(46,139,87)
textSize(34)
text("Food remaining :",100,100)
  drawSprites();


}



