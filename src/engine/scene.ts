import {Object2D, Sprite} from "./object2D"

export class Scene{
    constructor(){
        this.members = [];
    }

    update(){
        this.members.forEach(child=>{
            child.onUpdate();
        });

        if (this.onUpdate)
            this.onUpdate();
    }

    render(){
        this.members.forEach(child=>{
            if (child instanceof Sprite && this.ctx) {
                child.setContext(this.ctx);
            }
            child.onRender();
        });
    }   

    setContext(ctx: CanvasRenderingContext2D){
        this.ctx = ctx;
    }
    onUpdate: Function | undefined;
    ctx: CanvasRenderingContext2D | undefined;
    members: Array<Object2D>;
}