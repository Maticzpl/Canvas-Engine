import {Vector2,Transform} from "./base_types";

export interface Object2D {
    //Happens every tick
    onUpdate() :void; 
    //Called before the object is rendered
    onRender() :void; 

    origin: Transform;    
    components: Array<Object2D>;
}

export class Sprite implements Object2D {
    constructor(){
        this.origin = new Transform();
        this.components = [];
    }

    onRender(){

    }
    onUpdate(){

    }

    origin: Transform;    
    components: Array<Object2D>;
}