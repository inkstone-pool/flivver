import { BufferGear } from "./BufferGear";
import { isReactCollision } from "./Collision";
import { Plane } from "./Plane";
//增益
export function gainWatching(plane:Plane,buffgear:BufferGear){
    if(isReactCollision(plane,buffgear)){
        //增益消失，增益生效
        buffgear.onDestroy&&buffgear.onDestroy()
        buffgear.gainPlane(plane)
    }
}