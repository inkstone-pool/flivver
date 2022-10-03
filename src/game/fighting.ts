import { isReactCollision } from "./Collision";
import { EnemyPlane } from "./EnemyPlane";
import { Plane } from "./Plane";

export function fighting(plane:Plane,enemyPlanes:EnemyPlane[]){
    plane.bullets.forEach((bullet,index)=>{
        enemyPlanes.forEach((enemyPlane,eindex)=>{
            if(isReactCollision(bullet,enemyPlane)){
                bullet.onDestroy&&bullet.onDestroy()
                enemyPlane.injured()
            }
        })
    })
}