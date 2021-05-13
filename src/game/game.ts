//This will produce errors
//Move the game folder outside the submodule and it should be working

//uncomment after copying
/*
import * as CE from "../Canvas-Engine/src/engine/core";

import {Scene} from "../Canvas-Engine/src/engine/scene";
import { Vector2 } from "../Canvas-Engine/src/engine/base_types";

import {Object2D} from "../Canvas-Engine/src/engine/object2D";
import {Sprite} from "../Canvas-Engine/src/engine/sprite";
import {Outline, Shape} from "../Canvas-Engine/src/engine/shape";

import {KeyboardInput} from "../Canvas-Engine/src/engine/input";

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
window.onload = ()=>{
    //init engine
    CE.init();
    //bind scene
    CE.setActiveScene(level);
    
    //add sprite to the level
    level.members.push(sprite);

    //make the shape child of the sprite
    sprite.children.push(shape);

    //object transform
    sprite.origin.position = new Vector2(500,300);
    sprite.origin.scale = new Vector2(500,300);

    shape.origin.position = new Vector2(250,150);
    shape.origin.scale = new Vector2(300,500);
    shape.origin.rotation = 270;
    shape.outline = new Outline(3,'red');

	shape.origin_in_center = true;
	sprite.origin_in_center = true;
};
//runs every tick
level.onUpdate = ()=>{
	if(KeyboardInput.isPressed("w"))
		sprite.origin.position.y -= 2;
	if(KeyboardInput.isPressed("s"))
		sprite.origin.position.y += 2;
	if(KeyboardInput.isPressed("a"))
		sprite.origin.position.x -= 2;
	if(KeyboardInput.isPressed("d"))
		sprite.origin.position.x += 2;
	if(KeyboardInput.isPressed("r"))
		sprite.origin.rotation += 1;
	if(KeyboardInput.isPressed("q"))
		shape.origin.rotation += 1;
	
}; 

*/