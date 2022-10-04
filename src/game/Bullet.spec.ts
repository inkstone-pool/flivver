import { describe,it,expect, vi } from "vitest";
import {Bullet} from "./Bullet";
describe('Bullet', () => {
    it('move', () => {
        const bullet=new Bullet('baseBullet')
        bullet.y=1
        bullet.speed=1
        bullet.move()
        expect(bullet.y).toBe(0)
    });
    it('Crossed destory me', () => {
        const bullet=new Bullet('baseBullet')
        bullet.onDestroy=vi.fn()
        bullet.move()
        expect(bullet.onDestroy).toBeCalled()
    });
});