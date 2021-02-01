class Sand {
    constructor(x,y,radius){
        var options = {
            'density' : 1,
            'friction': 1.0,
            'restitution': 0.6
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        // pos.x = mouseX;
        // pos.y = mouseY;
        push ();
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        ellipseMode(RADIUS);
        fill ("green");
        ellipse (0,0,this.radius,this.radius);
        pop ();
    }
}