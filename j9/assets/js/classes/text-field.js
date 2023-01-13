import { Fields } from './fields.js';

class TextField extends Fields{

    constructor(element) {
        super(element);
    }

    validate(){
        if(this.element.getAttribute("required") !== true) {
            let error = `Le champ ${this.name} ne peut pas être vide` ;
            this.errors.push(error);
            element.className = "nok";
            return false;
        }
        else {
                element.className = "ok";
                return true;
            
        }
    };
}

export { TextField };