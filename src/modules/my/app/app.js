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
        this.showToast = false;
        this.loginEmail = event.target.value;
    }

    handlePassword(event) {
        this.showToast = false;
        this.loginPassword = event.target.value;
    }

    handleSubmit() {
        //this.showDash = true;
        //this.showLogin = false;
        //this.chlidComponentHeading = 'Dash Board';
        let mailformat =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (!mailformat.test(this.loginEmail)) {
            this.errorText = 'You have entered an invalid email address!';
            this.showToast = !this.showToast;
        } else if (!paswd.test(this.loginPassword)) {
            this.errorText =
                'Password must be in between 7 to 15 characters which contain at least one numeric digit and a special character!';
            this.showToast = !this.showToast;
        } else {
            this.showLogin = false;
            this.chlidComponentHeading = 'Dash Board';
        }

        /*
        if (
            (this.loginEmail === '' || this.loginEmail == null) &&
            (this.loginPassword === '' || this.loginPassword == null)
        ) {
            this.errorText = 'Please enter Email and Password.';
            this.showToast = !this.showToast;
            

            // validateEmptyCheck(checkEmptyEmail,checkEmptyPassword);
        } else if (
            (this.loginEmail === '' || this.loginEmail == null) &&
            (this.loginPassword !== '' || this.loginPassword != null)
        ) {

            this.errorText = 'Please enter Email.';
            this.showToast = !this.showToast;
            //alert('');
        } else if (
            (this.name !== '' || this.name != null) &&
            (this.password === '' || this.password == null)
        ) {
            this.errorText = 'Please enter Password.';
            this.showToast = !this.showToast;
            //alert('Please enter Password.');
        } else {
            this.showLogin = false;
            this.chlidComponentHeading = 'Dash Board';
        }*/

        //alert(loginEmail+''+loginPassword);

        //loginTempId = this.template.querySelector('div').chidNodes;
        //customElements.define('my-dash-board', buildCustomElementConstructor(DashBoard));
        //console.log(loginTempId);

        // loginTempId.style.display = "none";
    }
}
