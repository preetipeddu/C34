class Block {
  constructor(x,y){
    var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 0.4
    }
    this.body = Bodies.rectangle(x,y,70,70,options);
    this.w = 70;
    this.h = 70;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke("green");
    fill("white");
    rectMode(CENTER);
    rect(0,0,this.w, this.h);
    pop();
  }



}