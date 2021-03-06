import * as Rendering from "./renderer";
import * as Config from "./../engineConfig";
import {Scene} from "./scene";
import {KeyboardInput} from "./../engine/input";


export var activeScene : Scene | undefined

/**
 * Set the scene you want to be currently displayed and updated
 */
export function setActiveScene(scene :Scene){
    activeScene = scene;
}
/**
 * Initialize the engine
*/
export function init() {
    Rendering.init();
    KeyboardInput.init();

    setInterval(update,1000/Config.fps);
}
/**
 * Don't use externaly.
 * Calls onUpdate and onRender methods
 */
function update(){
    if(activeScene?.onUpdate)
        activeScene.onUpdate();
    activeScene?.update();

    Rendering.render();
}