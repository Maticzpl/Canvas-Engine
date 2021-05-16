import { Vector2 } from "./base_types";
import { canvas } from "./renderer";

/**
 * Most of keys present on the keyboard as a string union. Please report any missing keys.
 */
type Key = "Tab" | "Alt" | "AltGraph" | "Backspace" | "Control" |"Shift" | "Space" | "ContextMenu" | "Enter" | "NumLock" | "Home" | "PageUp" | "PageDown" | "Insert" | "Delete" | "ArrowUp" | "ArrowDown" | "ArrowRight" | "ArrowLeft" |"!" | "\""| "#" | "$" | "%" | "&" | "'" | "(" | ")" | "*" | "+" | "," | "-" | "." | "/" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | ":" | ";" | "<" | "=" | ">" | "?" | "@" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "[" | "\\" | "]" | "^" | "_" | "`" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "{" | "|" | "}" | "~" ;

type MouseButton = "LMB" | "ScrollButton" | "RMB"; 

enum KeyState{
    PRESSED,
    HOLD,
    RELEASE,
}

export class KeyboardInput{
    /**
     * Add event listeners for key presses.
     * Allready called by the init function from core.ts
     */
    static init(){
        KeyboardInput.keyStates = new Map<Key,KeyState>();

        addEventListener("keydown",(e)=>{   
            if(KeyboardInput.preventDefault)    
                e.preventDefault();
            
            KeyboardInput.keyStates.set(KeyboardInput.stringToKey(e.key),KeyState.PRESSED);
        });

        addEventListener("keyup",(e)=>{    
            if(KeyboardInput.preventDefault)    
                e.preventDefault(); 

            KeyboardInput.keyStates.set(KeyboardInput.stringToKey(e.key),KeyState.RELEASE);
        });
    }

    
    /**
     * Check for pressed key
     */
    static isPressed(key: Key){
        let state = this.keyStates.get(key);

        if (state == KeyState.PRESSED) {
            this.keyStates.set(key,KeyState.HOLD);            
        }

        return !(state === undefined || state == KeyState.RELEASE)
    }

    static isJustPressed(key: Key){
        let state = this.keyStates.get(key);
        
        if (state == KeyState.PRESSED) {
            this.keyStates.set(key,KeyState.HOLD);            
        }

        return state == KeyState.PRESSED;
        //return 
    }

    static preventDefault = true;

    private static keyStates: Map<Key,KeyState>;

    private static stringToKey(key :string){        
        let val = key.replace("Dead","~");
        val = val.replace(" ","Space");
        let keytype = val  as Key;
        return keytype;
    }
}

export class MouseInput{
    static init(){
        MouseInput.buttonStates = new Map<MouseButton,KeyState>();
        MouseInput.mouseWheelChange = {x:0,y:0,z:0};

        canvas.onmousemove = e => {   
            if(MouseInput.preventDefault)    
                e.preventDefault();

            MouseInput.currentPosition = new Vector2(e.x, e.y);
            
        };

        canvas.onwheel = e => {    
            if(MouseInput.preventDefault)    
                e.preventDefault();

            MouseInput.mouseWheelChange.x += e.deltaX;
            MouseInput.mouseWheelChange.y += e.deltaY;
            MouseInput.mouseWheelChange.z += e.deltaZ;
        }

        canvas.onmousedown = e => {
            if(MouseInput.preventDefault)    
                e.preventDefault();

            MouseInput.buttonStates.set(MouseInput.numberToButton(e.button),KeyState.PRESSED);
                
        }

        canvas.onmouseup = e => {
            if(MouseInput.preventDefault)    
                e.preventDefault();

            MouseInput.buttonStates.set(MouseInput.numberToButton(e.button),KeyState.RELEASE);
                
        }

        //prevent context menu
        if(MouseInput.preventDefault)
        {
            canvas.oncontextmenu = e => {
                e.preventDefault();
            }
        }
    }

    static getWheelOffset(){
        let offset = MouseInput.mouseWheelChange;
        let out = {x:offset.x, y:offset.y, z:offset.z};

        MouseInput.mouseWheelChange = {x:0,y:0,z:0};
        return out;
    }


    static isPressed(button: MouseButton){
        let state = MouseInput.buttonStates.get(button);

        if (state == KeyState.PRESSED) {
            MouseInput.buttonStates.set(button,KeyState.HOLD);            
        }

        return !(state === undefined || state == KeyState.RELEASE)
    }

    static isJustPressed(button: MouseButton){
        let state = MouseInput.buttonStates.get(button);
        
        if (state == KeyState.PRESSED) {
            MouseInput.buttonStates.set(button,KeyState.HOLD);            
        }

        return state == KeyState.PRESSED;
        //return 
    }

    private static numberToButton(number : number ) : MouseButton{
        switch (number) {
            case 0:
                return "LMB";
            case 1:                
                return "ScrollButton";
            case 2:                
                return "RMB";
        }

        return "LMB"; //thats not gonna happen
    }

    static preventDefault = true;
    static currentPosition: Vector2;

    private static buttonStates: Map<MouseButton,KeyState>;
    private static mouseWheelChange : {x:number, y:number, z:number};
}