export  class EnemyPlane{
    HP: number=3;
    onDestroy: (() => void) | undefined;
    constructor(public x:number=0,public  y:number=0,public  speed:number=1,public width: number=69,public height: number=99){
        
    }
    move(){
        this.y+=this.speed
        if(this.y>600){
            this.onDestroy&&this.onDestroy()
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
    const enemy=new EnemyPlane()
    
    enemy.onDestroy=()=>{
        enemyPlanes.splice(enemyPlanes.indexOf(enemy),1)
    }
    enemyPlanes.push(enemy)
}
export function runEnemyPlanes(enemyPlanes: EnemyPlane[]) {
    enemyPlanes.forEach((enemyPlane) => {
        enemyPlane.move()
    })
}