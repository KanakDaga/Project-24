class Stone {
    constructor(x,y,width,height,color){
        var options = {
            'density' : 1,
            'friction': 1.0,
            'restitution': 0.5
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        // pos.x = mouseX;
        // pos.y = mouseY;
        push ();
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        rectMode (CENTER);
        fill (this.color);
        rect (0,0,this.width,this.height);
        pop ();
    }
}