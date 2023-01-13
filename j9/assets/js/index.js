import { TextField } from './classes/text-field.js';
import { EmailField } from './classes/email-field.js';
import { PasswordField } from './classes/password-field.js';
import { Form } from './classes/form.js';

window.addEventListener("DOMContentLoaded", function(e){
    let input = document.querySelectorAll("#user-information input");

    let data = [];

    for(let i= 0; i < input.length; i++) {
        if(input[i].type === "text") {
            let newTextField = new TextField(input[i]);
            newTextField.name = input[i].getAttribute("name");
            data.push(newTextField);
            console.log(newTextField);
        }

        else if(input[i].type === "email") {
            let newEmailField = new EmailField(input[i]);
            newEmailField.name = input[i].getAttribute("name");
            data.push(newEmailField);
        }

        else if(input[i].type === "password") {
            let newPasswordField = new PasswordField(input[i]);
            newPasswordField.Name = input[i].getAttribute("name");
            data.push(newPasswordField);
        }



    }

    let newForm = new Form();

    for(let i = 0 ; i < data.length ; i ++ ) {
        newForm.addField(data[i]);
        data[i].element.addEventListener("change", function(){
            newForm.validate();
        });

    }



    let form = document.getElementById("user-information");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        newForm.submit();
        console.log("ok");
    })
});