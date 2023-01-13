class Form {
    #fields;
    #submitted;

    constructor() {
        this.#fields = []
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

    addField(field){
        this.#fields.push(field);
    };
    submit(){};
    validate(){};
    toJSON(){};
}

export { Form };
