import {Object2D} from "./object2D"

export class Scene{
    constructor(){
        this.members = [];
    }

    update(){
        this.members.forEach(child=>{
            child.onUpdate();
        });
    }
    render(){
        this.members.forEach(child=>{
            child.onRender();
        });
    }

    members: Array<Object2D>;
}