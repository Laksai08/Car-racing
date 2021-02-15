var hball, database,postion;

function setup(){
    database=firebase.database();
    console.log(database)
    createCanvas(500,500);
    hball = createSprite(250,250,10,10);
    hball.shapeColor = "red";
    var hballposition=database.ref('ball/position')
    hballposition.on("value",readpostion,showerror)
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readpostion(data){
    postion=data.val();
    hball.x=postion.x
    hball.y=postion.y

}

function showerror(){
    console.log("error in connecting the database")
}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x': postion.x+x,
        'y': postion.y+y

    })
}
