export class Vector2  {
    constructor(X :number,Y :number){
        this.x = X;
        this.y = Y;
    }
    x:number;
    y:number;
}

export class Transform {
    constructor(pos? :Vector2, rot? :Vector2, scale? :Vector2){
        this.position   = pos ? pos     : new Vector2(0,0);
        this.rotation   = rot ? rot     : new Vector2(0,0);
        this.scale      = scale ? scale : new Vector2(1,1);
    }
    position: Vector2;
    rotation: Vector2;
    scale: Vector2;
}
