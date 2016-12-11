import {Component, OnInit, Attribute} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector:'reset-mot-passe-form',
    templateUrl: 'reset-mot-passe-form.component.html',
    styleUrls: ['reset-mot-passe-form.component.scss'],
})
export class ResetMotPasseFormComponent implements OnInit {
    model = {email:'',motPasse:'',motPasseConfirmation:''}
    formErrors : {email?,motPasse?,motPasseConfirmation?,mismatchedPasswords?}
    formValidations: {email?,motPasse?,motPasseConfirmation?,mismatchedPasswords}

    form : FormGroup

    constructor(private fb:FormBuilder){

    }
    ngOnInit(){
        this.formErrors =  Object.assign({},this.model)
        this.formValidations = {
            mismatchedPasswords:'Les mots de passe saisis ne sont pas identiques.'
        }
        this.form = this.fb.group(
            {
                email:[this.model.email,Validators.required],
                motPasse: [this.model.motPasse, Validators.required],
                motPasseConfirmation: [this.model.motPasseConfirmation, Validators.required]
            },{validator: this.matchingPasswords('motPasse', 'motPasseConfirmation')})
    }
    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }
}