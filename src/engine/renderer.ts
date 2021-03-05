import * as Config from "./../engineConfig";
import {activeScene} from "./core";

export var ctx :CanvasRenderingContext2D;
var canvas :HTMLCanvasElement;
export function init(){
    canvas = document.querySelector(Config.canvasSelector)! as HTMLCanvasElement;
    ctx = canvas.getContext('2d')!;

}

export function render(){  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
        
    activeScene?.render();
}