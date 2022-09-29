import { ReactiveEffect } from "vue"
interface Plane{
    x:number,
    y:number,
    moveDown:()=>void
    moveUp:()=>void
    moveLeft:()=>void
    moveRight:()=>void
}
const defaultOptions={
    x:0,
    y:0,
    speed:5
}
export function setupPlane(plane: any,options?: {x:number,y:number}):Plane{
    Object.assign(plane,defaultOptions,options)
    plane.moveDown=function(){
        console.log(plane)
        plane.y+=plane.speed
    }
    plane.moveUp=function(){
        plane.y-=plane.speed
    }
    plane.moveLeft=function(){
        plane.x-=plane.speed
    }
    plane.moveRight=function(){
        plane.x+=plane.speed
    }
    return plane
}