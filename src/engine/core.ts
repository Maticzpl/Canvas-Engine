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

    setInterval(Rendering.render,1000/fps);
}
