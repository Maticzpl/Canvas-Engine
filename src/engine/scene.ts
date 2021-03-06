import {Drawable, Object2D} from "./object2D"
import {ctx} from "./renderer";

/**
 * Root for all the elements inside your level.
 * Objects not a member of the active scene wont be called via onUpdate and onRender.
 */
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
            ctx.save();
            child.onRender();
            child.afterRender();
            ctx.restore();
        });
    }   

    onUpdate: Function | undefined;
    members: Array<Object2D>;
}