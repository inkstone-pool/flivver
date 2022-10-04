import { GAME_HEIGHT } from ".";
import { Direction } from "./EnemyPlane";
import bulletImg from '../assets/images/baseBullet.png'
import enemyBasebullet from '../assets/images/enemyBasebullet.png'
const  BULLETMAP={
    baseBullet:{
        width:22,
        height:48,
        bulletImg:bulletImg
    },
    enemyBaseBullet:{
        width:26,
        height:26,
        bulletImg:enemyBasebullet
    }
}
export  class Bullet{
    public x:number=0;
    public  y:number=0;
    public  speed:number=5;
    public bulletImg:string
    public width:number;
    public height:number;
    direction:Direction=Direction.UP
    onDestroy: (() => void) | undefined;
    constructor(public bulletName:keyof(typeof BULLETMAP) ){
        const {bulletImg,width,height}=BULLETMAP[bulletName]
        this.bulletImg=bulletImg
        this.width=width
        this.height=height
    }
    move(){
        if(this.direction==Direction.UP){
            this.y-=this.speed
        }else{
            this.y+=this.speed
        }
        if(this.y<=0||this.y>=GAME_HEIGHT){
            this.onDestroy&&this.onDestroy()
        }
    }
    turnupDirection(){
        this.direction=this.direction===Direction.UP?Direction.Down:Direction.UP
    }
}