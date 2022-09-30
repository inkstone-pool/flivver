import { expect ,describe,it} from "vitest";
import { isReactCollision } from "./Collision";

describe('Collision', () => {
    it('isReactCollision', () => {
        const rectA={
            x:0,
            y:0,
            width:100,
            height:100
        }
        const rectB={
            x:60,
            y:60,
            width:100,
            height:100
        }
        const rectC={
            x:1000,
            y:1000,
            width:100,
            height:100
        }
        expect(isReactCollision(rectA,rectB)).toBe(true)
        expect(isReactCollision(rectA,rectC)).toBe(false)
    });
});