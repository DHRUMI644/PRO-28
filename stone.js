class Stone {
    constructor(x,y, radius){
var stone_options={
    friction:1,
    isStatic: false,
    restitution:0,
    density:1.2
}
this.image = loadImage('images/stone.png');
this.radius = radius;
this.body = Matter.Bodies.circle(x,y,this.radius/2, stone_options);
World.add(world, this.body);
    }
    fly(){
        this.body= null
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.image, position.x, position.y, this.radius, this.radius);
    }
}