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
    constructor(imageUri: string){
        this.origin = new Transform(undefined,undefined,new Vector2(100,100));
        this.components = [];


        var img = new Image();
        img.src = imageUri;
        this.image = img;
    }

    setContext(ctx: CanvasRenderingContext2D){
        this.ctx = ctx;
    }

    onRender(){
        this.ctx?.rotate(this.origin.rotation * Math.PI / 180);

        
        this.ctx?.drawImage(this.image,
            this.origin.position.x,
            this.origin.position.y,
            this.origin.position.x + this.origin.scale.x,
            this.origin.position.y + this.origin.scale.y
        );

        this.ctx?.rotate(-(this.origin.rotation * Math.PI / 180));
    }
    onUpdate(){

    }

    image: any;
    ctx: CanvasRenderingContext2D | undefined;
    origin: Transform;    
    components: Array<Object2D>;
}