class Slingshot {
  constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250
    }
    this.body = Constraint.create(options);
    World.add(world,this.body);
  }
  display(){
    var pointA = this.body.bodyA.position;
    var pointB = this.body.pointB;
    push();
    strokeWeight(3);
    stroke("blue");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();
  }

}