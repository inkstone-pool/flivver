enum Direction{
    UP='UP',
    Down='Down',
    LEFT='LEFT',
    RIGHT='RIGHT',
}
export  class EnemyPlane{
    public  HP: number=3;
    public  x:number=0;
    public  y:number=0;
    public  speed:number=1;
    static border: number =200
    public directions:[Direction,Direction]=[Direction.Down,Direction.RIGHT]
    onDestroy: (() => void) | undefined;
    constructor(public width: number=69,public height: number=99){
        this.x=Math.floor(Math.random()*(700-this.width));
        this.y=Math.floor(Math.random()*EnemyPlane.border);
    }
    //敌机移动逻辑
    move(){
        this.moveRight()
        this.moveDown()
        this.moveUp()
        this.moveLeft()
        this.directCtrl();
    }
    private directCtrl() {
        if (this.y > EnemyPlane.border) {
            let index=this.directions.indexOf(Direction.Down)
            this.directions[index] = Direction.UP
        } else if (this.y <=0) {
            let index=this.directions.indexOf(Direction.UP)
            this.directions[index] = Direction.Down
        } else if (this.x <=0) {
            let index=this.directions.indexOf(Direction.LEFT)
            this.directions[index] = Direction.RIGHT
        } else if (this.x + this.width >= 700) {
            let index=this.directions.indexOf(Direction.RIGHT)
            this.directions[index] = Direction.LEFT
        }
    }
    
    moveRight(){
        if (this.directions.includes(Direction.RIGHT)) {
            this.x+=this.speed
        }  
    }
    moveLeft(){
        if (this.directions.includes(Direction.LEFT)) {
            this.x-=this.speed
        }
    }
    moveUp(){
        if (this.directions.includes(Direction.UP)) {
            this.y-=this.speed
        }
    }
    moveDown(){
        if (this.directions.includes(Direction.Down)) {
            this.y+=this.speed
        }
    }
    injured(damageValue=1){
        this.HP-=damageValue
        if(!this.HP){
            this.onDestroy&&this.onDestroy()
        } 
    }  
    
}
export function initEnemyPlanes(enemyPlanes:EnemyPlane[]){
    setInterval(()=>{
        const enemy=new EnemyPlane()
        enemy.onDestroy=()=>{
            enemyPlanes.splice(enemyPlanes.indexOf(enemy),1)
        }
        enemyPlanes.push(enemy)
    },2000)
  

}
export function runEnemyPlanes(enemyPlanes: EnemyPlane[]) {
    enemyPlanes.forEach((enemyPlane) => {
        enemyPlane.move()
    })
}
