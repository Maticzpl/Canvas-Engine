/**
 * 2D Vector
 * Stores X and Y
*/
export class Vector2  {
    constructor(X :number,Y :number){
        this.x = X;
        this.y = Y;
    }

    lenght(){
        return Math.sqrt(
            Math.pow(this.x,2) + Math.pow(this.y,2)
            )
    }
    
    normalized(){
        let newVector = new Vector2(this.x,this.y);
        let lenght = newVector.lenght()
        newVector.x /= lenght;
        newVector.y /= lenght;

        return newVector;
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
