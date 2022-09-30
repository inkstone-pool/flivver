import { describe,it,expect, vi } from "vitest";
import Bullet from "./Bullet";
describe('Bullet', () => {
    it('move', () => {
        const bullet=new Bullet()
        bullet.y=1
        bullet.speed=1
        bullet.move()
        expect(bullet.y).toBe(0)
    });
    it('Crossed destory me', () => {
        const bullet=new Bullet(1,0,1)
        bullet.border=0
        bullet.onDestroy=vi.fn()
        bullet.move()
        expect(bullet.onDestroy).toBeCalled()
    });
});