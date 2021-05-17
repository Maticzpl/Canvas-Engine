import * as Config from "./../engineConfig";
import {activeScene} from "./core";

export var ctx :CanvasRenderingContext2D;
export var canvas :HTMLCanvasElement;

/**
 * Creates the canvas context.
 * Allready called by the init function from core.ts
 */
export function init(){
    canvas = document.querySelector(Config.canvasSelector)! as HTMLCanvasElement;
    ctx = canvas.getContext('2d')!;

}

/**
 * Updates viewport size,
 * calls all the onRender methods
 */
export function render(){  
    if(Config.resizeViewport){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    activeScene?.render();
}