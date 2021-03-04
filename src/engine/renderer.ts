import * as Config from "./../engineConfig";
import {activeScene} from "./core";

var ctx :CanvasRenderingContext2D;
var canvas :HTMLCanvasElement;
export function init(){
    canvas = document.querySelector(Config.canvasSelector)! as HTMLCanvasElement;
    ctx = canvas.getContext('2d')!;

    if(activeScene)
        activeScene.ctx = ctx;
}

export function render(){  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if(activeScene)
        activeScene.ctx = ctx;
        
    activeScene?.render();
}