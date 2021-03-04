import * as CE from "./../engine/core";

import {Scene} from "./../engine/scene";
import {Object2D,Sprite} from "./../engine/object2D";
import { Vector2 } from "../engine/base_types";

//create scene
let level = new Scene();
let sprite = new Sprite("https://maticzpl.github.io/assets/background/banner.webp");
window.onload = ()=>{
    //init engine
    CE.init();
    //bind scene
    CE.setActiveScene(level);

    level.members.push(sprite);

};
//run every tick
level.onUpdate = ()=>{

    sprite.origin.position = new Vector2(10,10);
    sprite.origin.scale = new Vector2(70,50);
    sprite.origin.rotation = 3;
    console.log(sprite);

};