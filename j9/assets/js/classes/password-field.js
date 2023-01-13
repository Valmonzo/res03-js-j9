import { Fields } from './fields.js';

class PasswordField extends Fields {

    constructor(element) {
        super(element);
    }

    validate() {
        if (this.element.getAttribute("required") !== true) {
            let error = `Le champ ${this.name} ne peut pas être vide`;
            this.errors.push(error);
            this.element.classList.add("nok");
            return false;
        }
        else {
            if (this.element.textContent.length < 5) {
                let error = `Le champ ${this.name} est trop court (5 caractères minimum)`;
                this.errors.push(error);
                this.element.classList.add("nok");
                return false;
            }
            else {
                this.element.classList.add("ok");
                return true;
            }
        }
    }
};


export { PasswordField };
