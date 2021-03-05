import {Drawable} from "./object2D";
import {Vector2,Transform} from "./base_types";

export class Sprite extends Drawable {
    constructor(imageUri: string){
        super();
        this.origin = new Transform(undefined,undefined,new Vector2(100,100));
        
        var img = new Image();
        img.src = imageUri;
        this.image = img;
    }

    onRender(){
        super.onRender();

        this.ctx.drawImage(this.image,
            0,
            0,
            1,
            1
        );
    }

    image: any;
}
