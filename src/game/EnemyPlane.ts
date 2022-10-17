import { Bullet, GAME_HEIGHT, GAME_WIDTH } from ".";

export enum Direction{
    UP='UP',
    Down='Down',
    LEFT='LEFT',
    RIGHT='RIGHT',
}
export  class EnemyPlane{
    public  bullets:Bullet[]=[]
    public  HP: number=3;
    public  x:number=0;
    public  y:number=0;
    public  speed:number=1;
    public border: number =GAME_HEIGHT/3
    public directions:[Direction,Direction]=[Direction.Down,Direction.RIGHT]
    onDestroy: (() => void) | undefined;
    attack!: (() => void);
    constructor(public width: number=69,public height: number=99){
        this.x=Math.floor(Math.random()*(GAME_WIDTH-this.width));
        this.y=Math.floor(Math.random()*this.border);
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
        if (this.y > this.border) {
            let index=this.directions.indexOf(Direction.Down)
            this.directions[index] = Direction.UP
        } else if (this.y <=0) {
            let index=this.directions.indexOf(Direction.UP)
            this.directions[index] = Direction.Down
        } else if (this.x <=0) {
            let index=this.directions.indexOf(Direction.LEFT)
            this.directions[index] = Direction.RIGHT
        } else if (this.x + this.width >= GAME_WIDTH) {
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
        if(this.HP<=0){
            this.onDestroy&&this.onDestroy()
        } 
    } 
}
export function initEnemyPlanes(enemyPlanes:EnemyPlane[],bullets:Bullet[]){
    const initEnemyPlane = () => {
        const enemy = new EnemyPlane();
        enemy.bullets = bullets;
        enemy.onDestroy = () => {
            enemyPlanes.splice(enemyPlanes.indexOf(enemy), 1);
        };
        enemy.attack = function () {
            let { x, y } = enemy;
            const bullet = new Bullet('enemyBaseBullet');
            bullet.x = x + enemy.width / 2;
            bullet.y = y + enemy.height;
            bullet.turnupDirection();
            bullet.onDestroy = () => {
                enemy.bullets.splice(enemy.bullets.indexOf(bullet), 1);
            };
            enemy.bullets.push(bullet);
        };
        let timer = setInterval(() => {
            if (enemy.HP <= 0) {
                clearInterval(timer);
            } else {
                enemy.attack();
            }
        }, 1500);
        enemyPlanes.push(enemy);
    };
    const startGenEnemy=()=>{
        return  setInterval(initEnemyPlane,8000)
    }
    let timer =startGenEnemy()
    return {
        timer,
        stopGenEnemy(){
            clearInterval(this.timer)
        },
        startGenEnemy(){
            this.timer=startGenEnemy()
        }
    }

}
export function runEnemyPlanes(enemyPlanes: EnemyPlane[]) {
    enemyPlanes.forEach((enemyPlane) => {
        enemyPlane.move()
    })
}
