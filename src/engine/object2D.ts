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
        this.use_local_coordinates = false;
        this.origin_in_center = false;
    }
    onUpdate(){
        
    }
    //Called before the object is rendered
    onRender(){         
        this.ctx = ctx;

        if (this.origin_in_center) {
            this.ctx.translate(-(this.origin.scale.x/2),-(this.origin.scale.y/2));
        }
        this.ctx.translate(this.origin.position.x,this.origin.position.y);
            
        if (this.origin_in_center) {
            this.ctx.translate(this.origin.scale.x/2,this.origin.scale.y/2);
        }        
           this.ctx.rotate(this.origin.rotation * Math.PI / 180);
            
        if (this.origin_in_center) {
            this.ctx.translate(-(this.origin.scale.x/2),-(this.origin.scale.y/2));
        }    
        this.ctx.scale(this.origin.scale.x,this.origin.scale.y);      

        
    }

    afterRender(){        
        this.components.forEach(component => {
            if (component instanceof Drawable && !component.use_local_coordinates)
                this.ctx.scale(1/this.origin.scale.x,1/this.origin.scale.y);
            
            component.onRender();
        });
    }


    origin: Transform;    
    components: Array<Object2D>;
    ctx: CanvasRenderingContext2D;
    use_local_coordinates: boolean;
    origin_in_center: boolean;
}
