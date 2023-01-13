class Form {
    #fields;
    #submitted;

    constructor() {
        this.#fields = [];
    }

    get fields() {
        return this.#fields;
    }

    get submitted() {
        return this.#submitted
    }

    set submitted(submitted) {
        this.#submitted = submitted;
    }

    addField(field) {
        this.#fields.push(field);
    }
    submit() {}


    validate() {
        console.log(this);
        for (let i = 0; i < this.fields.length; i++) {
            let result = this.fields[i].validate();

            if (result !== false) {
                let subBtn = document.querySelector("fieldset button");
                subBtn.classList.remove("disabled");
                subBtn.removeAttribute("diabled");
            }
        }
    }





    toJSON() {}
}

export { Form };
