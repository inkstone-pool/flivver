import Armor_Bonus from '../assets/images/Bonus_Items/Armor_Bonus.png'
import Hp_Bonus from '../assets/images/Bonus_Items/Hp_Bonus.png'
import { Plane } from './Plane';
//增益类
const  BufferGearSource={
    filed:{
        width:22,
        height:48,
        bufferIcon:Armor_Bonus,
        gainFn:(plane:Plane)=>{
            plane.shiledHP+=2
        }
    },
    medicalKits:{
        width:26,
        height:26,
        bufferIcon:Hp_Bonus,
        gainFn:(plane:Plane)=>{
            plane.HP+=2
        }
    },
}
export class BufferGear{
    public x:number=0;
    public y:number=0;
    public bufferIcon:string
    public width:number;
    public height:number;
    onDestroy: (() => void) | undefined;
    constructor(public buffName:keyof(typeof BufferGearSource) ){
        const {bufferIcon,width,height}=BufferGearSource[buffName]
        this.bufferIcon=bufferIcon
        this.width=width
        this.height=height
    }
    gainPlane(plane:Plane){
        BufferGearSource[this.buffName].gainFn(plane)
    }
}