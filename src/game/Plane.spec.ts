import { Plane, setupPlane } from "./Plane";
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
            let plane={} as Plane
            setupPlane(plane,[],{...defaultOptions})
            plane.moveDown()
            expect(plane.y).toBe(1)
        });
        it('moveUp', () => {
            let plane={} as Plane
            setupPlane(plane,[],{...defaultOptions})
            plane.moveUp()
            expect(plane.y).toBe(-1)
        });
        it('moveLeft', () => {
            let plane={} as Plane
            setupPlane(plane,[],{...defaultOptions})
            plane.moveLeft()
            expect(plane.x).toBe(-1)
        });
        it('moveRight', () => {
            let plane={} as Plane
            setupPlane(plane,[],{...defaultOptions})
            plane.moveRight()
            expect(plane.x).toBe(1)
        });
    });
});
describe('buttet', () => {
    it('attack', () => {
        const buttets: string | any[] | undefined=[]
        let plane={} as Plane
        setupPlane(plane,buttets,{...defaultOptions},)
        plane.attack()
        expect(buttets.length).toBe(1)
    });
});
describe('run',()=>{
    it('move all buttles ', () => {
        const buttets=[new Bullet('baseBullet')]
        let plane={} as Plane
        setupPlane(plane,buttets,{...defaultOptions})
        plane.run()
        expect(buttets[0].y).not.toBe(0)
    });
    it('Crossed destory buttets ', () => {
        const buttets: Bullet[] | undefined=[]
        let plane={} as Plane
        setupPlane(plane,buttets,{x:0,y:0})
        plane.attack()
        plane.run()
        expect(buttets.length).toBe(0)
    });
})