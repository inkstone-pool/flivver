interface Rect{
    x:number,
    y:number,
    width:number,
    height:number
}
//矩形碰撞
export function isReactCollision(rectA:Rect,rectB:Rect):boolean{
    return Math.abs(rectA.y-rectB.y)<=rectA.height/2+rectB.height/2&&
        Math.abs(rectA.x-rectB.x)<=rectA.width/2+rectB.width/2

}