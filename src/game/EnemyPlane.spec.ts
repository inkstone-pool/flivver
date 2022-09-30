import { expect,describe,it } from "vitest";
import {EnemyPlane, initEnemyPlanes, runEnemyPlanes }from "./EnemyPlane";

describe('EnemyPlane', () => {
    it('move', () => {
        const enemy=new EnemyPlane()
        enemy.y=0
        enemy.move()
        expect(enemy.y).toBe(1)

    });
    it('initenemyPlanes',()=>{
        const enemyPlanes: EnemyPlane[]=[]
        initEnemyPlanes(enemyPlanes)
        expect(enemyPlanes.length).toBe(1)
    })
    it('enemyPlanes move',()=>{
        const enemy=new EnemyPlane()
        enemy.y=1
        const enemyPlanes: EnemyPlane[]=[enemy]
        runEnemyPlanes(enemyPlanes)
        expect(enemy.y).toBe(2)
    })
});