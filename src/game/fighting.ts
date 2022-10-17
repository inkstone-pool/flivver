import { isReactCollision } from "./Collision";
import { EnemyPlane } from "./EnemyPlane";
import { Plane } from "./Plane";

export function fighting(plane:Plane,enemyPlanes:EnemyPlane[]){
    //我方战机子弹与敌方碰撞
    plane.bullets.forEach((bullet,index)=>{
        enemyPlanes.forEach((enemyPlane,eindex)=>{
            if(isReactCollision(bullet,enemyPlane)){
                bullet.onDestroy&&bullet.onDestroy()
                enemyPlane.injured()
            }
        })
    })
     //敌方战机子弹与我方与碰撞
    enemyPlanes.forEach((enemyPlane)=>{
        enemyPlane.bullets.forEach((bullet,index)=>{
            if(isReactCollision(bullet,plane)){
                plane.injured()
                bullet.onDestroy&&bullet.onDestroy()
            }
        })
    })
 
}