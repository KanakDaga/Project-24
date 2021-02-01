class Hammer {
    constructor(x,y){
        var options = {
            'density' : 2,
            'friction': 1.0,
            'restitution': 0.5
        };
        this.body = Bodies.rectangle(x,y,100,50,options);
        this.width = 100;
        this.height = 50;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push ();
        rectMode (CENTER);
        fill ("blue");
        rect (pos.x,pos.y,this.width,this.height);
        pop ();
    }
}