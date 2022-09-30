export  class Bullet{
    border: number=0;
    onDestroy: (() => void) | undefined;
    constructor(public x:number=0,public  y:number=0,public  speed:number=5,public width: number=44,public height: number=58){
        
    }
    move(){
        this.y-=this.speed
        if(this.y<=this.border){
            this.onDestroy&&this.onDestroy()
        }
    }
}