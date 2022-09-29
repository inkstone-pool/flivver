import {Container,Text,Sprite,Texture} from 'pixi.js'
import { createRenderer } from 'vue';
export const renderer=createRenderer<Container,Container>({
    createElement(type) {
        let element
        switch (type) {
            case 'Container':
                element =new Container()
                break;
            case 'Sprite':
                element =new Sprite()
                break;
            default:
                throw new Error(type)
                break;
        }
        return element
    },
    patchProp(el,key,preVal,nextVal){
        switch (key) {
            case 'texture':
                    (el as Sprite).texture=Texture.from(nextVal)
                break;
            case "onClick":
                el.on("pointertap", nextVal);
            default:
                (el as any)[key] = nextVal;
                break;
        }
    }, 
    insert(el,parent){
        if(el&&parent){
            parent.addChild(el)
        }
    }, 
    remove(el){
        if(el.parent){
            el.parent.removeChild(el)
        }
    }, 
    createText(text){
        return new Text(text)
    },
    createComment(text){
        return new Text(text)
    }, setText(){

    }, setElementText(){

    }, parentNode(node){
        return node.parent
    }, nextSibling(){
        return null
    }
})