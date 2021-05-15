/**
 * Most of keys present on the keyboard as a string union. Please report any missing keys.
 */
type Key = "Tab" | "Alt" | "AltGraph" | "Backspace" | "Control" |"Shift" | "Space" | "ContextMenu" | "Enter" | "NumLock" | "Home" | "PageUp" | "PageDown" | "Insert" | "Delete" | "ArrowUp" | "ArrowDown" | "ArrowRight" | "ArrowLeft" |"!" | "\""| "#" | "$" | "%" | "&" | "'" | "(" | ")" | "*" | "+" | "," | "-" | "." | "/" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | ":" | ";" | "<" | "=" | ">" | "?" | "@" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "[" | "\\" | "]" | "^" | "_" | "`" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "{" | "|" | "}" | "~" ;

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
            KeyboardInput.keyStates.set(KeyboardInput.stringToKey(e.key),KeyState.PRESSED);
        });

        addEventListener("keyup",(e)=>{
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

    private static keyStates: Map<Key,KeyState>;

    private static stringToKey(key :string){        
        let val = key.replace("Dead","~");
        val = val.replace(" ","Space");
        let keytype = val  as Key;
        return keytype;
    }
}