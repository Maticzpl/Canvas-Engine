/**
 * 2D Vector
 * Stores X and Y
*/
export class Vector2  {
    constructor(X :number,Y :number){
        this.x = X;
        this.y = Y;
    }
    x:number;
    y:number;
}

/**
 * Stores position rotation (degrees) and scale
 */
export class Transform {
    constructor(pos? :Vector2, rot? :number, scale? :Vector2){
        this.position   = pos ? pos     : new Vector2(0,0);
        this.rotation   = rot ? rot     : 0;
        this.scale      = scale ? scale : new Vector2(1,1);
    }
    position: Vector2;
    rotation: number;
    scale: Vector2;
}
