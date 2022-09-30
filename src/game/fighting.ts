import { isReactCollision } from "./Collision";
import { EnemyPlane } from "./EnemyPlane";
import { Plane } from "./Plane";

export function fighting(plane:Plane,enemyPlanes:EnemyPlane[]){
    plane.bullets.forEach((bullet,index)=>{
        enemyPlanes.forEach((enemyPlane,eindex)=>{
            if(isReactCollision(bullet,enemyPlane)){
                plane.bullets.splice(index,1)
                enemyPlanes.splice(eindex,1)
            }
        })
    })
}