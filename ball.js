class Ball {
  constructor(x,y){
    var options = { 
        density: 1, 
        frictionAir: 0.005
    }
    this.body = Bodies.circle(x,y,80);
    this.r = 80;
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("purple");
    ellipseMode(RADIUS);
    ellipse(0,0,80,80);
    pop();
  }

}