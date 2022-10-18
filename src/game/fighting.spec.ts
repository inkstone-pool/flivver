import { expect,describe ,it} from "vitest";
import { Bullet } from "./Bullet";
import { EnemyPlane } from "./EnemyPlane";
import { fighting } from "./fighting";
import { Plane, setupPlane } from "./Plane";

describe('fighting', () => {
    it('enemy and bullet', () => {
        const bullet=new Bullet('baseBullet')
        bullet.x=0
        bullet.y=0
        bullet.width=100
        bullet.height=100
        const bullets =[bullet]
        let plane={}
        setupPlane(plane as Plane,bullets)
        const enemyPlane=new EnemyPlane()
        enemyPlane.x=50
        enemyPlane.y=50
        enemyPlane.width=100
        enemyPlane.height=100
        const enemyPlanes=[enemyPlane]

        fighting(plane as Plane,enemyPlanes)
        expect((plane as Plane).bullets.length).toBe(0)
        expect(enemyPlanes.length).toBe(0)
    });
});