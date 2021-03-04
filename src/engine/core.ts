import * as Rendering from "./renderer";
import * as Config from "./../engineConfig";
import {Scene} from "./scene";

const fps = 60;

export var activeScene : Scene | undefined

export function setActiveScene(scene :Scene){
    activeScene = scene;
}

export function init() {
    Rendering.init();

    setInterval(update,1000/fps);
}

function update(){
    if(activeScene?.onUpdate)
        activeScene.onUpdate();
    activeScene?.update();

    Rendering.render();
}