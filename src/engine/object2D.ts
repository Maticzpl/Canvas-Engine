import {Vector2,Transform} from "./base_types";
import {ctx} from "./renderer";

/**
 * Base for children polymorphism
 * Implement this interface when creating a component / child.
 */
export interface Object2D {
    //Happens every tick
    onUpdate() :void; 
    //Called before the object is rendered
    onRender() :void; 
    afterRender() :void; 

    origin: Transform;    
    children: Array<Object2D>;
}

/**
 * Base for children that want to render something.
 * Extend this class for ctx access and origin transform handeling.
 */
export class Drawable implements Object2D {
    constructor(){
        this.origin = new Transform();
        this.children = [];
        this.use_local_coordinates = false;
        this.origin_in_center = false;
    }
    /**
     * Do not call externaly
     */
    onUpdate(){
        
    }
    
    /**
     * Do not call externaly
     * Called before the object is rendered
     */
    onRender(){         
        if (this.origin_in_center) {
            ctx.translate(-(this.origin.scale.x/2),-(this.origin.scale.y/2));
        }
        ctx.translate(this.origin.position.x,this.origin.position.y);
            
        if (this.origin_in_center) {
            ctx.translate(this.origin.scale.x/2,this.origin.scale.y/2);
        }        
           ctx.rotate(this.origin.rotation * Math.PI / 180);
            
        if (this.origin_in_center) {
            ctx.translate(-(this.origin.scale.x/2),-(this.origin.scale.y/2));
        }    
        ctx.scale(this.origin.scale.x,this.origin.scale.y);      

        
    }

    /**
     * Do not call externaly
     * Called after the object is rendered
     */
    afterRender(){        
        this.children.forEach(child => {
            ctx.save();

                if (child instanceof Drawable && !child.use_local_coordinates)
                    ctx.scale(1/this.origin.scale.x,1/this.origin.scale.y);
                
                child.onRender();

            ctx.restore();
        });
    }


    origin: Transform;    
    children: Array<Object2D>;
    use_local_coordinates: boolean;
    origin_in_center: boolean;
}
