import {Drawable} from "./object2D";
import {Vector2,Transform} from "./base_types";

export class Shape extends Drawable {
    constructor(verticies: Vector2[], color?: string,hollow?: boolean){
        super();

        this.verticies = verticies;

        this.color = color ? color : "black";
        this.hollow = hollow ? hollow : false;
    }

    onRender(){
        super.onRender();
       
        this.ctx.moveTo(this.verticies[0].x,this.verticies[0].y);
        
        for (let i = 1; i < this.verticies.length; i++) {
            const vertex = this.verticies[i];
            
            this.ctx.lineTo(vertex.x,vertex.y);
        }

        if(this.hollow){
            if(this.ctx)
                this.ctx.strokeStyle = this.color;

            this.ctx.stroke();
        }
        else {
            if(this.ctx)
                this.ctx.fillStyle = this.color;

            this.ctx.fill();
        }

        
    }

    verticies: Vector2[];
    hollow: boolean;
    color: string;
}