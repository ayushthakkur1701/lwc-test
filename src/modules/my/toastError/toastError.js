import { LightningElement, api } from 'lwc';

export default class ToastError extends LightningElement {
    @api errorMsg;
}
