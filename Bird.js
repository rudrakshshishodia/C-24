class Bird {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 60,60, options);
    this.width = 60;
    this.height = 60;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    //this is for filling the shape
    fill("red");
    //this is for border
    strokeWeight(7);
    
    stroke("pink");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
