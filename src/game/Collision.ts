interface Rect{
    x:number,
    y:number,
    width:number,
    height:number
}
//矩形碰撞
export function isReactCollision(rectA:Rect,rectB:Rect):boolean{
        return (rectA.x+rectA.width>=rectB.x&&
            rectB.x+rectB.width>=rectA.x&&
            rectA.y+rectA.height>=rectB.y&&
            rectB.y+rectB.height>=rectA.y)
}