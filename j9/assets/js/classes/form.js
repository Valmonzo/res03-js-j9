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
    submit() {
      let txt =   JSON.stringify(this);
      sessionStorage.setItem("form","txt");



    }


    validate() {
        let subBtn = document.querySelector("fieldset button");
        let errorForm = [];
        for (let i = 0; i < this.fields.length; i++) {
            let result = this.fields[i].validate();

            if (result === false) {
                errorForm.push(this.fields[i].errors)
            }
        }

        if(errorForm.length === 0) {
        subBtn.classList.remove("disabled");
                subBtn.removeAttribute("diabled");
        }
        else if(errorForm.length >= 1 ) {
            subBtn.classList.add("disabled");
            subBtn.setAttribute("disabled");

        }
    }





    toJSON() {
        let item = {
            data : []
        };
        for(let i = 0; i < this.fields.length; i++) {
            item.data.push(serialize(this.fields[i]));
        }

       return JSON.stringify(item);

    }
}

export { Form };
