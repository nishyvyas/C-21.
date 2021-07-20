class Wall{
    constructor(x,y,w,h){
        let op={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,op);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }

    show(){

        var pos=this.body.position;
        push();
        rectMode(CENTER)
        stroke('blue');
        fill('yellow');
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}