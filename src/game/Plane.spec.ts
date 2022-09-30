import { setupPlane } from "./Plane";
import {describe,expect,it} from 'vitest'
import {Bullet} from "./Bullet";
const  defaultOptions={
    x:0,
    y:0,
    speed:1
}
describe('Plane', () => {
    describe('move', () => {
    
        it('moveDown', () => {
            const plane =setupPlane({},[],{...defaultOptions})
            plane.moveDown()
            expect(plane.y).toBe(1)
        });
        it('moveUp', () => {
            const plane =setupPlane({},[],{...defaultOptions})
            plane.moveUp()
            expect(plane.y).toBe(-1)
        });
        it('moveLeft', () => {
            const plane =setupPlane({},[],{...defaultOptions})
            plane.moveLeft()
            expect(plane.x).toBe(-1)
        });
        it('moveRight', () => {
            const plane =setupPlane({},[],{...defaultOptions})
            plane.moveRight()
            expect(plane.x).toBe(1)
        });
    });
});
describe('buttet', () => {
    it('attack', () => {
        const buttets: string | any[] | undefined=[]
        const plane =setupPlane({},buttets,{...defaultOptions},)
        plane.attack()
        expect(buttets.length).toBe(1)
    });
});
describe('run',()=>{
    it('move all buttles ', () => {
        const buttets=[new Bullet()]
        const plane=setupPlane({},buttets,{...defaultOptions})
        plane.run()
        expect(buttets[0].y).not.toBe(0)
    });
    it('Crossed destory buttets ', () => {
        const buttets: Bullet[] | undefined=[]
        const plane=setupPlane({},buttets,{x:0,y:0})
        plane.attack()
        plane.run()
        expect(buttets.length).toBe(0)
    });
})