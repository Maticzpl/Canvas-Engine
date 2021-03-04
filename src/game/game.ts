import * as CE from "./../engine/core";

import {Scene} from "./../engine/scene";
import {Object2D,Sprite} from "./../engine/object2D";

window.onload = ()=>{
    CE.init();

    let level = new Scene();
    level.members.push(new Sprite);

    CE.setActiveScene(level);
};

