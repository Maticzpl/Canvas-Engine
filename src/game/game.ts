import * as CE from "./../engine/core";

import {Scene} from "./../engine/scene";
import { Vector2 } from "../engine/base_types";

import {Object2D} from "./../engine/object2D";
import {Sprite} from "./../engine/sprite";
import {Shape} from "./../engine/shape";

//create scene
let level = new Scene();
let sprite = new Sprite("https://maticzpl.github.io/assets/background/banner.webp");
let shape = new Shape(
    [
        new Vector2(0,0),
        new Vector2(1,0),
        new Vector2(1.5,0.5),
        new Vector2(1,1),
        new Vector2(0,1),    
    ]
    ,'#F005'
);
let frame = 0;
window.onload = ()=>{
    //init engine
    CE.init();
    //bind scene
    CE.setActiveScene(level);

    //add sprite to the level
    level.members.push(sprite);

    //make the shape child of the sprite
    sprite.components.push(shape);

    //object transform
    sprite.origin.position = new Vector2(150,100);
    sprite.origin.scale = new Vector2(500,300);

    shape.origin.position = new Vector2(0,300);
    shape.origin.scale = new Vector2(500,300);
    shape.origin.rotation = 270;
    
    
};
//runs every tick
level.onUpdate = ()=>{

};