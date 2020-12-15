class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.r=rthis.body=Bodies.circle(x,y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
       fill("purple");
       ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}