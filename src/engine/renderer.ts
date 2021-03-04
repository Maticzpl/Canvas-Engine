import * as Config from "./../engineConfig";

var ctx :CanvasRenderingContext2D;
export function init(){
    var canvas = document.querySelector(Config.canvasSelector)! as HTMLCanvasElement;
    ctx = canvas.getContext('2d')!;
}

export function render(){
    ctx.fillRect(0,0,100,100); //for test
}