import {Drawable} from "./object2D";
import {Vector2,Transform} from "./base_types";

/**
 * Rectangle image
 */
export class Sprite extends Drawable {
    constructor(imageUri: string){
        super();
        this.origin = new Transform(undefined,undefined,new Vector2(100,100));
        
        var img = new Image();
        img.src = imageUri;
        this.image = img;
    }

    /**
     * Do not call externaly, only overwrite it
     * Called before the object is rendered
     */
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
