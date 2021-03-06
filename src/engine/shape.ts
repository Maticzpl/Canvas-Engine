import {Drawable} from "./object2D";
import {Vector2,Transform} from "./base_types";

/**
 * Defines a shepe's outline
 */
export class Outline {
    constructor(width: number,color: string){
        this.color = color;
        this.thickness = width;
    }
    thickness: number;
    color: string;
}

/**
 * Solid color drawable element
 * Use for custom polygon shapes.
 */
export class Shape extends Drawable {
    constructor(verticies: Vector2[], color?: string,outline?: Outline){
        super();

        this.verticies = verticies;

        this.color = color ? color : "black";
        this.outline = outline ? outline : new Outline(0,'black');
    }

    /**
     * Do not call externaly, only overwrite it
     * Called before the object is rendered
     */
    onRender(){
        super.onRender();
       
        this.ctx.moveTo(this.verticies[0].x,this.verticies[0].y);
        
        for (let i = 1; i < this.verticies.length; i++) {
            const vertex = this.verticies[i];
            
            this.ctx.lineTo(vertex.x,vertex.y);
        }
        this.ctx.closePath();

        this.ctx.save();
        this.ctx.resetTransform();
        
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        
        this.ctx.lineWidth = this.outline.thickness;
        this.ctx.strokeStyle = this.outline.color;
        this.ctx.stroke();        

        this.ctx.restore();

        
    }

    verticies: Vector2[];
    outline: Outline;
    color: string;
}