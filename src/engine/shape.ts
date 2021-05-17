import {Drawable} from "./object2D";
import {Vector2,Transform} from "./base_types";
import { ctx } from "./renderer";

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

        this.color = color ? color : "white";
        this.outline = outline ? outline : new Outline(0,'#0000');
    }

    /**
     * Do not call externaly
     * Called before the object is rendered
     */
    onRender(){
        super.onRender();
       
        ctx.beginPath();
        ctx.moveTo(this.verticies[0].x,this.verticies[0].y);
        for (let i = 1; i < this.verticies.length; i++) {
            const vertex = this.verticies[i];
            
            ctx.lineTo(vertex.x,vertex.y);
        }
        ctx.closePath();

        ctx.save();
        ctx.resetTransform();
        
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.lineWidth = this.outline.thickness;
        ctx.strokeStyle = this.outline.color;
        ctx.stroke();        

        ctx.restore();

        
    }

    verticies: Vector2[];
    outline: Outline;
    color: string;
}