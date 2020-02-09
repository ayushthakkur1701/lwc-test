/* eslint-disable @lwc/lwc/no-document-query */
/* eslint-disable no-alert */
import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track showDash = false;
    @track showLogin = true;
    @track chlidComponentHeading = '';
    loginEmail = '';
    loginPassword = '';
    showToast = false;
    errorText = '';
    showNextPage = false;
    handleName(event) {
        this.loginEmail = event.target.value;
    }

    handlePassword(event) {
        this.loginPassword = event.target.value;
    }

    removeToast() {
        this.showToast = false;
    }

    handleSubmit() {
        //this.showDash = false;
        //this.showLogin = false;
        //this.chlidComponentHeading = 'Dash Board';
        let mailformat = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/;
        let paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (!mailformat.test(this.loginEmail)) {
            this.errorText = 'You have entered an invalid email address!';
            this.showToast = !this.showToast;
        } else if (!paswd.test(this.loginPassword)) {
            this.errorText =
                'Password must be in between 7 to 15 characters which contain at least one numeric digit and a special character!';
            this.showToast = !this.showToast;
        } else {
            this.showLogin = false;
            this.showDash = true;
            this.chlidComponentHeading = 'Dash Board';
        }

    }
}
