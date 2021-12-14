"use strict"
let c=<HTMLCanvasElement>document.getElementById("myCanvas")
let ctx=<CanvasRenderingContext2D>c.getContext("2d")

class Ball{
    
    x:number
    y:number
    dx:number
    dy:number
    r:number
    //color:number
    
    constructor(x:number,y:number,dx:number,dy:number,r:number){
        this.x=x
        this.y=y
        this.dx=dx
        this.dy=dy
        this.r=r   
    }

    update(){
        this.draw()         //draw each ball
        this.move()         //move each ball
        this.checkBounce()  //bounce each ball
        this.gravity()    // add some gravity
        this.drag()
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r, 0,  2 * Math.PI);
        ctx.stroke();
          
    }

    gravity(){
        this.dy+=.1
    }

    drag(){
        this.dx *=.995
        this.dy *=.995

    }

    checkBounce(){
        if (this.x<this.r || this. x>c.width-this.r){
            this.dx=-this.dx
        }
        if (this.y<this.r || this. y>c.height-this.r){
            this.dy=-this.dy
        }
    }

    move(){
        this.x+= this.dx
        this.y+= this.dy
    }

}



let balls:Ball[]=[]

const numBalls=200
makeBalls(numBalls)

requestAnimationFrame(cycle)


function makeBalls(n:number){
    for(let i=0;i<n;i++){
        balls.push(new Ball(250,450,(Math.random()-.5)*10, -Math.random()*10,Math.random()*20))
    }
}

function cycle(){

    ctx.fillStyle="#ffffff10"
    ctx.fillRect(0,0,500,500) //Clears the canvas

    for(let i=0;i<numBalls;i++){
        balls[i].update()
        
    }

    requestAnimationFrame(cycle) // calls the next frame (1/60th of a second later)

}






