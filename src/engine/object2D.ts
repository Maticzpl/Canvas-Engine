import {Vector2,Transform} from "./base_types";
import {ctx} from "./renderer";

export interface Object2D {
    //Happens every tick
    onUpdate() :void; 
    //Called before the object is rendered
    onRender() :void; 
    afterRender() :void; 

    origin: Transform;    
    components: Array<Object2D>;
}

export class Drawable implements Object2D {
    constructor(){
        this.origin = new Transform();
        this.components = [];
        this.ctx = ctx;
    }
    onUpdate(){
        
    }
    //Called before the object is rendered
    onRender(){ 
        this.ctx = ctx;
        this.ctx.translate(this.origin.position.x,this.origin.position.y);
        this.ctx.scale(this.origin.scale.x,this.origin.scale.y);
        this.ctx.rotate(this.origin.rotation * Math.PI / 180);

    }

    afterRender(){        
        this.components.forEach(component => {
            component.onRender();
        });
    }


    origin: Transform;    
    components: Array<Object2D>;
    ctx: CanvasRenderingContext2D;
}
